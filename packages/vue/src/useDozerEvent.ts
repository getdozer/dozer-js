import { DozerOnEventOption } from "@dozerjs/dozer";
import { Operation } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { ClientReadableStream } from "grpc-web";
import { Ref, onUnmounted, ref } from "vue";
import { DozerConsumer } from "./context";

export function useDozerEvent(options: DozerOnEventOption[]) {
  const { client } = DozerConsumer();
  const stream: Ref<ClientReadableStream<Operation>> = ref(client.onEvent(options));
  const error = ref<Error>();

  stream.value.on('error', (err) => {
    error.value = err;
  });

  onUnmounted(() => {
    stream.value.cancel();
  });

  return { stream, error };
}
