import { DozerOnEventOption } from "@dozerjs/dozer";
import { FieldDefinition, Operation } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { Ref, onMounted, ref } from "vue";
import { DozerConsumer } from "./context";
import { useDozerEvent } from "./useDozerEvent";
import { merge } from "./util";

export function useDozerEndpoints(options: DozerOnEventOption[]) {
  const { client } = DozerConsumer();
  const { stream } = useDozerEvent(options.filter(item => item.eventType !== undefined));
  const data: Ref<{ fields?: FieldDefinition[]; records?: any[], error?: Error }[]> = ref([]);
  const cacheRef: Ref<{ [index: number]: Operation[] }> = ref({});
  const callbackRef: Ref<{ [endpoint: string]: ((operation: Operation) => void)[] }> = ref({});

  const consume = (index: number, operation: Operation) => {
    const { fields, records } = data.value[index] ?? {};

    if (fields === undefined || records === undefined) {
      return;
    }

    const result = merge(records, operation, fields);
    result && data.value.splice(index, 1, { fields, records: result });
  };

  stream.value.on('data', (operation: Operation) => {
    callbackRef.value[operation.getEndpointName()]?.forEach(cb => cb(operation));
  });


  onMounted(() => {
    options.forEach((option, index) => {
      callbackRef.value[option.endpoint] ??= [];
      callbackRef.value[option.endpoint].push((operation: Operation) => {
        if (data.value[index]?.error) {
          return;
        }
        if (data.value[index]?.fields === undefined) {
          cacheRef.value[index] ??= [];
          cacheRef.value[index].push(operation);
        } else {
          consume(index, operation);
        }
      });

      client.getEndpoint(option.endpoint).query({ filter: option.filter }).then(response => {
        data.value[index] = { fields: response[0], records: response[1] };
        if (cacheRef.value[index]) {
          while (cacheRef.value[index].length) {
            const operation = cacheRef.value[index].pop();
            operation && consume(index, operation);
          }
        }
      }).catch((error: Error) => {
        data.value[index] = { error };
      });
    });
  });


  return data;
}
