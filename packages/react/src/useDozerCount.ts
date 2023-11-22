import { Operation, OperationType } from "@dozerjs/dozer/lib/cjs/generated/protos/types_pb";
import { DozerQuery } from "@dozerjs/dozer/lib/cjs/query_helper";
import { ClientReadableStream } from "grpc-web";
import { useCallback, useEffect, useRef, useState } from "react";
import { DozerConsumer } from "./context";

export function useDozerCount(name: string, query?: DozerQuery) {
  const { client } = DozerConsumer();
  const endpoint = client.getEndpoint(name);
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<Error>();

  const readyRef = useRef<boolean>(false);
  const errorRef = useRef<Error>();
  const streamRef = useRef<ClientReadableStream<Operation>>();

  const consume = useCallback((operation: Operation) => {
    if (operation.getEndpointName() !== name) {
      return;
    }

    if (errorRef.current) {
      return;
    }

    if (readyRef.current === false) {
      return;
    }

    const map = {
      [OperationType.INSERT]: 1,
      [OperationType.DELETE]: -1,
      [OperationType.UPDATE]: 0,
    };

    setCount((prev) => prev + map[operation.getTyp()]);
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
    endpoint.count(query).then((response) => {
      setCount(response);
      readyRef.current = true;
    }).catch((error) => {
      setError(error);
    });
  }, []);
  return { count, error, connect, consume };
}
