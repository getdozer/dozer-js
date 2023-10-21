import { DozerFilter } from "@dozerjs/dozer";
import { EventType, Operation } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { ClientReadableStream } from "grpc-web";
import { useState, useEffect } from "react";
import { DozerConsumer } from "./context";

export function useDozerEvent(options: {
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
