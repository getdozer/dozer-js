<script setup lang="ts">
import { DozerOnEventOption } from "@dozerjs/dozer";
import { useDozerEvent } from '@dozerjs/dozer-vue';
import { inject } from 'vue';
import Records from '../components/Records.vue';

const options = inject<DozerOnEventOption[]>('endpoints', []);
const { stream } = useDozerEvent(options);
</script>

<template>
  <div v-for="option in options">
    <h3>{{ option.endpoint }}</h3>
    <Records :endpoint="option.endpoint" :stream="stream" />
  </div>
</template>
