<script setup lang="ts">
import { types_pb } from "@dozerjs/dozer";
import { useDozerQuery } from '@dozerjs/dozer-vue';
import { ClientReadableStream } from "grpc-web";
import DataTable from "./DataTable.vue";
import ErrorMessage from "./ErrorMessage.vue";


const { endpoint, stream } = defineProps<{
  endpoint: string;
  stream: ClientReadableStream<types_pb.Operation>;
}>();

const { fields, records, error, connect } = useDozerQuery(endpoint);
connect(stream);

</script>

<template>
  <ErrorMessage v-if="error" :error="error"/>
  <DataTable v-else :fields="fields" :records="records" :error="error" />
</template>
