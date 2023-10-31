import { DozerQuery, DozerRecord, types_pb } from "@dozerjs/dozer";
import { ClientReadableStream } from "grpc-web";
import { Ref, onMounted, ref } from "vue";
import { DozerConsumer } from "./context";
import { merge } from "./util";

export function useDozerQuery<T>(name: string, query?: DozerQuery) {
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);
  const fields: Ref<types_pb.FieldDefinition[]> = ref([]);
  const records: Ref<DozerRecord<T>[]> = ref([]);
  const error: Ref<Error | undefined> = ref();

  const cache: Ref<types_pb.Operation[]> = ref([]);
  const _stream: Ref<ClientReadableStream<types_pb.Operation> | undefined> = ref();

  const consume = (operation: types_pb.Operation) => {
    if (operation.getEndpointName() !== name) {
      return;
    }

    if (error.value) {
      return;
    }

    if (fields.value.length === 0) {
      cache.value.push(operation);
    } else {
      const result = merge(records.value, operation, fields.value);
      records.value = result ?? records.value;
    }
  };

  const connect = (stream: ClientReadableStream<types_pb.Operation>) => {
    if (_stream.value === stream) {
      return;
    }
    _stream.value?.removeListener('data', consume);
    _stream.value = stream;
    _stream.value?.on('data', consume);
  }

  onMounted(() => {
    endpoint.query<T>(query).then((response) => {
      console.log(response)
      fields.value = response[0];
      records.value = response[1];
      while (cache.value.length) {
        const operation = cache.value.pop();
        operation && consume(operation);
      }
    }).catch(err => {
      error.value = err;
    });
  });

  return { fields, records, connect, consume, error };
}
