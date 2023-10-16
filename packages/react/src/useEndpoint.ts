import { DozerEndpointEvent, DozerFilter, DozerQuery } from "@dozerjs/dozer";
import { EventType, FieldDefinition, Operation, OperationType, Record, Type } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { RecordMapper } from "@dozerjs/dozer/lib/esm/helper";
import { ClientReadableStream } from "grpc-web";
import { useCallback, useEffect, useState } from "react";
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

export function useDozerQuery(name: string, query: DozerQuery) {
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);
  const [fields, setFields] = useState<FieldDefinition[]>([]);
  const [primaryIndexKeys, setPrimaryIndexKeys] = useState<string[]>([]);
  const [records, setRecords] = useState<any[]>([]);
  const [cache, setCache] = useState<Operation[]>([]);
  const [error, setError] = useState<Error>();
  const [_stream, setStream] = useState<ClientReadableStream<Operation>>();

  const consume = useCallback((operation: Operation) => {
    if (fields.length === 0) {
      return;
    }
    const mapper = new RecordMapper(fields);
    setRecords((prev) => {
      if (prev) {
        const result = merge(prev, operation, mapper, fields, primaryIndexKeys);
        return result ?? prev;
      } else {
        return prev;
      }
    });

    const index = cache.indexOf(operation);
    if (index !== -1) {
      setCache(prev => {
        prev.splice(index, 1);
        return prev;
      });
    }
  }, [fields, primaryIndexKeys, cache]);

  const cb = useCallback((operation: Operation) => {
    if (operation.getEndpointName() !== name) {
      return;
    }

    if (error) {
      return;
    }

    if (fields === undefined || records === undefined || primaryIndexKeys === undefined) {
      setCache((prev) => [...prev, operation]);
    } else {
      consume(operation);
    }
  }, [name, error, fields, primaryIndexKeys]);

  const connect = (stream: ClientReadableStream<Operation>) => {
    if (_stream === stream) {
      return;
    }
    setStream(stream);
  }

  useEffect(() => {
    _stream?.on('data', cb);
    return () => {
      _stream?.removeListener('data', cb);
    }
  }, [_stream, cb]);
  
  
  useEffect(() => {
    setPrimaryIndexKeys([]);
    setFields([]);
    setRecords([]);
    setCache([]);
    
    Promise.all([
      endpoint.getFields().then(response => response.getFieldsList().reduce((keys: string[], field, index) => {
        if (response.getPrimaryIndexList().includes(index)) {
          keys.push(field.getName());
        }
        return keys;
      }, [])),
      endpoint.query(query),
    ]).then(([primaryIndexKeys, [fields, records]]) => {
      setPrimaryIndexKeys(primaryIndexKeys);
      setFields(fields);
      setRecords(records);
      cache.forEach(consume);
    }).catch(error => {
      setError(error);
    });
  }, [name]);

  return { fields, records, connect, error };
}

export function useDozerWatch(options: {
  endpoint: string,
  eventType?: EventType,
  filter?: DozerFilter,
}[]) {
  const { client } = DozerConsumer();
  const [stream, setStream] = useState<ClientReadableStream<Operation>>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const _stream = client.onEvent(options)
    setStream(_stream);
    _stream.on('error', setError);
    return () => {
      _stream.cancel();
    }
  }, []);

  return { stream, error };
}

function merge(prev: any[], operation: Operation, mapper: RecordMapper, fields: FieldDefinition[], primaryIndexKeys: string[]) {
  if (operation.getTyp() === OperationType.INSERT) {
    const newValue: any = mapper.mapRecord(operation.getNew()?.getValuesList() ?? []);
    const index = prev.findIndex(record => compareFn(record, newValue, fields, primaryIndexKeys));
    // ignore if exists
    if (index !== -1) {
      return;
    }
    return [...prev, newValue];
  } else if (operation.getTyp() === OperationType.DELETE) {
    const oldValue: any = mapper.mapRecord(operation.getOld()?.getValuesList() ?? []);
    const index = prev.findIndex((record) => compareFn(record, oldValue, fields, primaryIndexKeys));
    // ignore if not exists
    if (index === -1) {
      return;
    }
    prev.splice(index, 1);  
    return [...prev];
  } else if (operation.getTyp() === OperationType.UPDATE) {
    const newValue: any = mapper.mapRecord(operation.getNew()?.getValuesList() ?? []);
    const index = prev.findIndex((record) => compareFn(record, newValue, fields, primaryIndexKeys));
    // ignore if not exists
    if (index === -1) {
      return;
    }
    // ignore if version is lower
    if (newValue.version < prev[index].version) {
      return;
    }
    prev.splice(index, 1, newValue);
    return [...prev];
  } else {
    return;
  }
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