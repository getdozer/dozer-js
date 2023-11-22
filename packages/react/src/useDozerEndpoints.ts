import { DozerOnEventOption } from "@dozerjs/dozer";
import { FieldDefinition, Operation } from "@dozerjs/dozer/lib/cjs/generated/protos/types_pb";
import { useCallback, useEffect, useRef, useState } from "react";
import { DozerConsumer } from "./context";
import { useDozerEvent } from "./useDozerEvent";
import { merge } from "./util";

export function useDozerEndpoints(options: DozerOnEventOption[]) {
  const { client } = DozerConsumer();
  const { stream } = useDozerEvent(options.filter(item => item.eventType !== undefined));
  const [data, setData] = useState<{ fields?: FieldDefinition[]; records?: any[], error?: Error }[]>([]);
  const cacheRef = useRef<{ [index: number]: Operation[] }>({});
  const dataRef = useRef<{ fields?: FieldDefinition[]; records?: any[], error?: Error }[]>([]);
  const callbackRef = useRef<{ [endpoint: string]: ((operation: Operation) => void)[] }>({});


  const consume = useCallback((index: number, operation: Operation) => {
    const { fields, records } = dataRef.current[index] ?? {};

    if (fields === undefined || records === undefined) {
      return;
    }

    setData((prev) => {
      const result = merge(records, operation, fields);
      result && prev.splice(index, 1, { fields, records: result });
      return [...prev];
    });
  }, []);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  useEffect(() => {
    options.forEach((item, index) => {
      if (item && cacheRef.current[index]) {
        while (cacheRef.current[index].length) {
          const operation = cacheRef.current[index].pop();
          operation && consume(index, operation);
        }
      }
    })
  }, [data]);

  useEffect(() => {
    stream?.on('data', (operation: Operation) => {
      callbackRef.current[operation.getEndpointName()]?.forEach(cb => cb(operation));
    });
  }, [stream])


  useEffect(() => {
    options.forEach((option, index) => {
      callbackRef.current[option.endpoint] ??= [];
      callbackRef.current[option.endpoint].push((operation: Operation) => {
        if (dataRef.current[index]?.error) {
          return;
        }
        if (dataRef.current[index]?.fields === undefined) {
          cacheRef.current[index] ??= [];
          cacheRef.current[index].push(operation);
        } else {
          consume(index, operation);
        }
      });

      client.getEndpoint(option.endpoint).query({ filter: option.filter }).then(response => {
        setData(prev => {
          prev[index] = { fields: response[0], records: response[1] };
          return [...prev];
        });
      }).catch((error: Error) => {
        setData(prev => {
          prev[index] = { error };
          return [...prev];
        });
      })
    });

    return () => {
      stream?.cancel();
    }
  }, []);
  return data;
}
