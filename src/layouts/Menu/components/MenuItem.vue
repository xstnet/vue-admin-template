<script setup name="MenuItem" lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
import { MenuProps } from '../index.vue';

interface IProps {
  menus: MenuProps[];
}
const { menus } = defineProps<IProps>();
</script>

<template>
  <template v-for="menu in menus">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <span class="menu-title">
          <SvgIcon v-if="menu.icon" :name="menu.icon" /> {{ menu.label }}
        </span>
      </template>
      <MenuItem :menus="menu.children" />
    </el-sub-menu>

    <el-menu-item v-else :index="menu.path">
      <span class="menu-title">
        <SvgIcon v-if="menu.icon" :name="menu.icon" /> {{ menu.label }}
      </span>
    </el-menu-item>
  </template>
</template>

<style scoped lang="scss">
.menu-title {
  :deep(.icon) {
    margin-right: 5px;
    font-size: 18px;
    vertical-align: -0.20em;
  }
}
</style>
