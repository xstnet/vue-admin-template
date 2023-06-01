<script setup lang="ts">
import { useRoute } from 'vue-router';

interface IProps { }
const route = useRoute();

</script>

<template>
  <el-result icon="error" title="404 Page NotFound!" :sub-title="`当前路由: ${route.path}`" style="padding: 0;">
    <template #extra>
      <router-link to="/"><el-button type="primary">返回首页</el-button></router-link>
    </template>
  </el-result>
</template>

<style scoped lang="scss"></style>