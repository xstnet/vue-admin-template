<script setup name="MenuItem" lang="ts">
import { MenuProps } from '../index.vue';

interface IProps {
  menus: MenuProps[];
}
const { menus } = defineProps<IProps>();
</script>

<template>
  <template v-for="menu in menus">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" index="1-4">
      <template #title>{{ menu.label }}</template>
      <MenuItem :menus="menu.children" />
    </el-sub-menu>

    <el-menu-item v-else :index="menu.path">
      <el-icon><icon-menu /></el-icon>
      <span>{{ menu.label }}</span>
    </el-menu-item>
  </template>
</template>

<style scoped>
.header {
  height: 50px;
  background-color: #fff;
}
</style>
