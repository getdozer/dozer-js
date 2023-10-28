import { Operation, OperationType } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { DozerQuery } from "@dozerjs/dozer/lib/esm/query_helper";
import { ClientReadableStream } from "grpc-web";
import { Ref, onMounted, ref } from "vue";
import { DozerConsumer } from "./context";

export function useDozerCount(name: string, query?: DozerQuery) {
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);
  const count: Ref<number> = ref(0);
  const error: Ref<Error | undefined> = ref();

  const ready: Ref<boolean> = ref(false);
  const _stream: Ref<ClientReadableStream<Operation> | undefined> = ref();

  const consume = (operation: Operation) => {
    if (operation.getEndpointName() !== name) {
      return;
    }

    if (error.value) {
      return;
    }

    if (ready.value === false) {
      return;
    }

    const map = {
      [OperationType.INSERT]: 1,
      [OperationType.DELETE]: -1,
      [OperationType.UPDATE]: 0,
    };

    count.value = count.value + map[operation.getTyp()];
  };

  const connect = (stream: ClientReadableStream<Operation>) => {
    if (_stream.value === stream) {
      return;
    }
    _stream.value?.removeListener('data', consume);
    _stream.value = stream;
    _stream.value?.on('data', consume);
  }

  onMounted(() => {
    endpoint.count(query).then((response) => {
      count.value = response;
      ready.value = true;
    }).catch((err) => {
      error.value = err;
    });
  });

  return { count, error, connect, consume };
}
