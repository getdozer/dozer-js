<script setup lang="ts">
const { error } = defineProps<{
  error: Error;
}>();
</script>
<template>
  <div class="error-container">
    <v-alert
      color="error"
      variant="tonal"
      :text="error.message"
      class="error-message"
    ></v-alert>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}

.error-message {
  flex: 0 0 auto;
}
</style>
