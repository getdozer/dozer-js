<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const routes = [
  {
    label: 'Common',
    path: '/',
  },
  {
    label: 'Count + Event',
    path: '/count-event',
  },
  {
    label: 'Query + Event',
    path: '/query-event',
  },
  {
    label: 'Endpoints',
    path: '/endpoints',
  },
];

const route = useRoute();
const index = routes.findIndex(item => item.path === route.path);
const active = ref(index);
</script>

<template>
  <v-toolbar class="toolbar">
    <img src="/logo.svg" alt="Dozer" width="137" height="40" />
    <div class="navs">
      <v-tabs v-model="active">
        <v-tab v-for="route in routes" :value="route.path" :to="route.path">{{ route.label }}</v-tab>
      </v-tabs>
    </div>
  </v-toolbar>
</template>

<style scoped>
.toolbar :deep .v-toolbar__content {
  padding: 0 24px;
  gap: 2rem;
  width: 100%;
}
.navs {
  flex-grow: 1;
  min-width: 0;
  display: flex;
}

.navs :deep .v-tab {
  flex-grow: 1;
  min-width: 0;
  color: #939393;
}

.navs :deep .v-tab--selected {
  color: rgb(var(--v-theme-primary));
}
</style>
