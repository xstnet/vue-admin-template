<script setup lang="ts">
import Header from './Header/index.vue';
import Content from './Content/index.vue';
import Menu from './Menu/index.vue';

defineProps();
</script>

<template>
  <el-container class="global-layout">
    <Header />
    <el-container class="content-layout">
      <Menu />
      <Content />
    </el-container>
  </el-container>
</template>

<style scoped>
.global-layout {
  flex-direction: column;
  min-height: 100vh;
  align-items: stretch;
}

.content-layout {
  flex: 1;
  /* background-color: ; */
}
</style>
