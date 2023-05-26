<script setup lang="ts">
import MenuItem from './components/MenuItem.vue';
defineProps();
export interface MenuProps {
  label: string;
  path: string;
  children?: MenuProps[];
}
const menus: MenuProps[] = [
  {
    label: '首页',
    path: '/'
  },
  {
    label: '组织管理',
    path: '/organization'
  },
  {
    label: '课程管理',
    path: '/course'
  },
  {
    label: '考试管理',
    path: '/exam',
    children: [
      { label: '试卷管理', path: '/exam/paper' },
      { label: '题库管理', path: '/exam/question' }
    ]
  }
];

const handleOpen = () => {};
const handleClose = () => {};
</script>

<template>
  <el-aside width="200px">
    <el-menu default-active="2" class="menu" @open="handleOpen" @close="handleClose">
      <MenuItem :menus="menus" />
    </el-menu>
  </el-aside>
</template>

<style scoped>
.menu {
  height: 100%;
}
</style>
