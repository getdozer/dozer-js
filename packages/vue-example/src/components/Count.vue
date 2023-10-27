<script setup lang="ts">
import { types_pb } from "@dozerjs/dozer";
import { useDozerCount } from '@dozerjs/dozer-vue';
import { ClientReadableStream } from "grpc-web";

const { endpoint, stream } = defineProps<{
  endpoint: string;
  stream: ClientReadableStream<types_pb.Operation>;
}>();

const { count, error, connect } = useDozerCount(endpoint);
connect(stream);

</script>

<template>
  <div>{{ error?.message ?? count }}</div>
</template>
