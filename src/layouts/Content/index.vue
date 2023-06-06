<script setup lang="ts">
import Breadcrumb from '../Breadcrumb/index.vue'
defineProps();
</script>

<template>
  <div style="width: 100%;">
    <Breadcrumb />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 16px 24px;
}
</style>
