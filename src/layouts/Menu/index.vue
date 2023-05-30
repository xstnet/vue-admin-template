<script setup lang="ts">
import { useMenuStore } from '@/store';
import MenuItems from './components/MenuItems.vue';
import { storeToRefs } from 'pinia';
const menuStore = useMenuStore();
const { menus } = storeToRefs(menuStore);

</script>

<template>
  <el-aside width="210px" class="menu-container">
    <el-menu router default-active="/" class="menu">
      <MenuItems :menus="menus" />
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
.menu-container {}

.menu {
  height: 100%;
}
</style>
