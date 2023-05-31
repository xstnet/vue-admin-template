<script setup lang="ts">
import Header from './Header/index.vue';
import Content from './Content/index.vue';
import Menu from './Menu/index.vue';
import { onMounted, watch } from 'vue';
import Cache from '@/utils/cache';
import { useRouter } from 'vue-router';
import { useRequest } from 'vue-request';
import { getUserInfo } from '@/api/user';
import { useUserInfoStore } from '@/store';

defineProps();
const router = useRouter();
const userInfoStore = useUserInfoStore();
const { data: userInfo, loading: getUserInfoLoading } = useRequest(getUserInfo)
// todo: 未登录处理
onMounted(() => {
  const token = Cache.getToken();
  if (!token) {
    router.replace('/login');
  }
})
watch(userInfo, () => {
  if (userInfo && userInfo.value?.id) {
    userInfoStore.setUserInfo(userInfo.value)
  }
})
</script>

<template>
  <el-container v-if="!getUserInfoLoading" class="global-layout">
    <Header />
    <el-container class="content-layout">
      <Menu />
      <Content />
    </el-container>
  </el-container>
  <div v-if="getUserInfoLoading" v-loading.fullscreen.lock="getUserInfoLoading" element-loading-text="加载中, 请稍后"></div>
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
