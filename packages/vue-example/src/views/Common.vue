<script setup lang="ts">
import { DozerOnEventOption } from "@dozerjs/dozer";
import { inject } from 'vue';
import Count from '../components/Count.vue';
import Records from '../components/Records.vue';

const options = inject<DozerOnEventOption[]>('endpoints');

</script>

<template>
  <div v-for="option in options">
    <div>
      <div class="count">
        <h3>{{ option.endpoint }}</h3>
        <Count :endpoint="option.endpoint"/>
      </div>
      <Records :endpoint="option.endpoint"/>
    </div>
  </div>
</template>

<style scoped>
.count {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
