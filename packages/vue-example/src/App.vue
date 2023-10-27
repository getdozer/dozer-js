<script setup lang="ts">
import { DozerOnEventOption, types_pb } from '@dozerjs/dozer';
import { DozerProvider } from '@dozerjs/dozer-vue';
import { RouterView } from 'vue-router';
import { provide } from 'vue';
import NavBar from './components/NavBar.vue'

provide<DozerOnEventOption[]>('endpoints', [
  {
    endpoint: 'airports_count',
    eventType: types_pb.EventType.ALL,
  },
  {
    endpoint: 'departures_count',
    eventType: types_pb.EventType.ALL,
  },
  {
    endpoint: 'airports',
    eventType: types_pb.EventType.ALL,
  },
]);

</script>

<template>
   <DozerProvider :value="{
      serverAddress: 'http://localhost:62998',
    }">
      <div class="container">
        <NavBar />
        <div class="content">
          <RouterView />
        </div>
      </div>
    </DozerProvider>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  min-height: 0;
  padding: 1.5rem;
}
</style>
