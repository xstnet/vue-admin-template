<script setup lang="ts">
defineProps();
</script>

<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  padding: 16px 24px;
}
</style>
