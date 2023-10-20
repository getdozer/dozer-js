import { DozerQuery } from "@dozerjs/dozer";
import { FieldDefinition, Operation } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { ClientReadableStream } from "grpc-web";
import { useState, useRef, useCallback, useEffect } from "react";
import { DozerConsumer } from "./context";
import { merge } from "./util";

export function useDozerQuery(name: string, query?: DozerQuery) {
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);
  const [fields, setFields] = useState<FieldDefinition[]>([]);
  const [records, setRecords] = useState<any[]>([]);
  const [error, setError] = useState<Error>();

  const fieldsRef = useRef<FieldDefinition[]>([]);
  const errorRef = useRef<Error>();
  const cacheRef = useRef<Operation[]>([]);
  const streamRef = useRef<ClientReadableStream<Operation>>();

  const consume = useCallback((operation: Operation) => {
    if (operation.getEndpointName() !== name) {
      return;
    }

    if (errorRef.current) {
      return;
    }

    if (fieldsRef.current.length === 0) {
      cacheRef.current.push(operation);
    } else {
      setRecords((prev) => {
        if (prev) {
          const result = merge(prev, operation, fieldsRef.current);
          return result ?? prev;
        } else {
          return prev;
        }
      });
    }
  }, []);

  const connect = (stream?: ClientReadableStream<Operation>) => {
    if (streamRef.current === stream) {
      return;
    }
    streamRef.current = stream;
  }

  useEffect(() => {
    streamRef.current?.on('data', consume);
    return () => {
      streamRef.current?.removeListener('data', consume);
    }
  }, [streamRef.current, consume]);

  useEffect(() => {
    fieldsRef.current = fields;
  }, [fields]);

  useEffect(() => {
    while (cacheRef.current.length) {
      const operation = cacheRef.current.pop();
      operation && consume(operation);
    }
  }, [fields]);

  useEffect(() => {
    errorRef.current = error;
  }, [error]);

  useEffect(() => {
    endpoint.query(query).then(([fields, records]) => {
      setFields(fields);
      setRecords(records);
    }).catch(error => {
      setError(error);
    });
  }, []);

  return { fields, records, connect, error };
}