<script setup lang="ts">
import { DozerOnEventOption } from "@dozerjs/dozer";
import { useDozerEndpoints } from '@dozerjs/dozer-vue';
import { inject } from 'vue';
import DataTable from "../components/DataTable.vue";

const options = inject<DozerOnEventOption[]>('endpoints', []);
const data = useDozerEndpoints(options);
</script>

<template>
  <div v-for="(option, index) in options">
    <div>
      <h3>{{ option.endpoint }}</h3>
      <DataTable :fields="data[index]?.fields ?? []" :records="data[index]?.records ?? []" :error="data[index]?.error"/>
    </div>
  </div>
</template>
