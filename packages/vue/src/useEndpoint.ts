import { DozerEndpointEvent, DozerQuery } from "@dozerjs/dozer";
import { EventType, FieldDefinition, OperationType, Record, Type } from '@dozerjs/dozer/lib/esm/generated/protos/types_pb'
import { watch, ref, onMounted } from "vue";
import { DozerConsumer } from "./context";

export function useDozerEndpointCount(name: string, options?: {
  query?: DozerQuery,
  watch?: EventType,
}) {
  const { count } = useDozerEndpointCommon(name, Object.assign({}, options, { onlyCount: true }));
  return { count };
}

export function useDozerEndpointQuery(name: string, options?: {
  query?: DozerQuery,
  watch?: EventType,
}) {
  const { fields, records } = useDozerEndpointCommon(name, Object.assign({}, options, { onlyQuery: true }));
  return { fields, records };
}

export function useDozerEndpoint(name: string, options?: {
  query?: DozerQuery,
  watch?: EventType,
}) {
  const { count, fields, records } = useDozerEndpointCommon(name, options);
  return { count, fields, records };
}

function useDozerEndpointCommon(name: string, options?: {
  query?: DozerQuery,
  watch?: EventType,
  onlyCount?: boolean,
  onlyQuery?: boolean,
}) {
  const count = ref<number>(0);
  const fields = ref<FieldDefinition[]>();
  const records = ref<Object[]>([]);
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);

  const limit = options?.query?.limit ?? 50;
  const buffer = ref<Object[]>([]);

  const stream = ref();

  watch(buffer, (newBuffer) => {
    records.value = newBuffer.slice(0, limit);
  });

  onMounted(() => {
    options?.onlyQuery || endpoint.count(options?.query).then((response) => {
      count.value = response;
    });

    options?.onlyCount || endpoint.query(options?.query).then((response) => {
      fields.value = response[0];
      buffer.value = response[1];
    });

    if (options?.watch !== undefined) {
      stream.value = endpoint.onEvent((evt: DozerEndpointEvent) => {
        if (evt.data.typ === OperationType.INSERT) {
          if (!options.onlyCount) {
            if (buffer.value.length < limit * 2 && evt.data.new) {
              buffer.value = [...buffer.value, evt.data.new];
            }
          }

          if (!options.onlyQuery) {
            count.value = count.value + 1;
          }
        } else if (evt.data.typ === OperationType.DELETE) {
          if (!options.onlyCount) {
            const index = buffer.value.findIndex((record) => compareFn(record, evt.data.new, evt.fields, evt.primaryIndexKeys));
            if (index !== -1) {
              buffer.value.splice(index, 1);
            }
          }

          if (!options.onlyQuery) {
            count.value = Math.max(count.value - 1, 0);
          }
        } else if (evt.data.typ === OperationType.UPDATE) {
          if (!options.onlyCount) {
            const newValue: Record = evt.data.new as Record ?? {};
            const index = buffer.value.findIndex((record) => compareFn(record, evt.data.new, evt.fields, evt.primaryIndexKeys));
            if (index !== -1) {
              buffer.value.splice(index, 1, newValue);
            }

          }
        }
      }, options.watch, options.query?.filter);
    }
  })

  return { count, fields, records };
}

function compareFn (record: object, newValue: object = {}, fields: FieldDefinition[], primaryIndexKeys: string[]) {
  return primaryIndexKeys.every((key) => {
    const k = key as keyof Record;
    const f = fields?.find((f) => f.getName() === key);
    if (f?.getTyp() === Type.POINT) {
      return (record as Record)[k].toString() === (newValue as Record)[k].toString();
    } else {
      return (record as Record)[k] === (newValue as Record)[k];
    }
  })
}
