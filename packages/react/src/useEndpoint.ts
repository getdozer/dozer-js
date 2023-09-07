import { DozerEndpointEvent, DozerQuery } from "@dozerjs/dozer/src";
import { EventType, FieldDefinition, OperationType, Record, Type } from "@dozerjs/dozer/src/generated/protos/types_pb";
import { useEffect, useState } from "react";
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
  const { fields, records, error } = useDozerEndpointCommon(name, Object.assign({}, options, { onlyQuery: true }));
  return { fields, records, error };
}

export function useDozerEndpointFields(name: string) {
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);
  const [fields, setFields] = useState<FieldDefinition[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    endpoint.getFields().then((response) => {
      setFields(response.getFieldsList());
    }).catch(error => {
      setError(error);
    });
  }, [name]);

  return { fields, error };
}

export function useDozerEndpoint(name: string, options?: {
  query?: DozerQuery,
  watch?: EventType,
}) {
  const { count, fields, records, error } = useDozerEndpointCommon(name, options);
  return { count, fields, records, error };
}

function useDozerEndpointCommon(name: string, options?: {
  query?: DozerQuery,
  watch?: EventType,
  onlyCount?: boolean,
  onlyQuery?: boolean,
}) {
  const [count, setCount] = useState<number>(0);
  const [fields, setFields] = useState<FieldDefinition[]>();
  const [records, setRecords] = useState<Object[]>([]);
  const [error, setError] = useState<Error>();
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);

  const limit = options?.query?.limit ?? 50;
  const [buffer, setBuffer] = useState<Object[]>([]);

  useEffect(() => {
    setRecords(buffer.slice(0, limit));
  }, [buffer])

  useEffect(() => {
    options?.onlyQuery || endpoint.count(options?.query).then((response) => {
      setCount(response.getCount())
    }).catch(error => {
      setError(error);
    });
  }, []);

  useEffect(() => {
    options?.onlyCount || endpoint.query(options?.query).then((response) => {
      const [fields, records] = response;
      setFields(fields);
      setBuffer(records);
    }).catch(error => {
      setError(error);
    });
  }, []);

  useEffect(() => {
    if (options?.watch !== undefined) {
      const stream = endpoint.onEvent((evt: DozerEndpointEvent) => {
        if (evt.data.typ === OperationType.INSERT) {
          options.onlyCount || setBuffer((prev: Object[]) => {
            if (prev.length < limit * 2 && evt.data.new) {
              return [...prev, evt.data.new];
            } else {
              return prev;
            }
          });
          options.onlyQuery || setCount((prev: number) => prev + 1);
        } else if (evt.data.typ === OperationType.DELETE) {
          options.onlyCount || setBuffer((prev: Object[]) => {
            const index = prev.findIndex((record) => compareFn(record, evt.data.new, evt.fields, evt.primaryIndexKeys));
            if (index > -1) {
              prev.splice(index, 1);
              return prev;
            } else {
              return prev;
            }
          });
          options.onlyQuery || setCount((prev: number) => Math.max(prev - 1, 0));
        } else if (evt.data.typ === OperationType.UPDATE) {
          options.onlyCount || setBuffer((prev: Object[]) => {
            const newValue: Record = evt.data.new as Record ?? {};
            const index = prev.findIndex((record) => compareFn(record, evt.data.new, evt.fields, evt.primaryIndexKeys));
            if (index > -1) {
              prev.splice(index, 1, newValue);
              return [...prev];;
            } else {
              return prev;
            }
          });
        }
      }, options.watch, options.query?.filter);
      return () => {
        stream?.cancel();
      }
    } else {
      return () => { };
    }
  }, [])

  return { error, count, fields, records };
}

function compareFn(record: object, newValue: object = {}, fields: FieldDefinition[], primaryIndexKeys: string[]) {
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