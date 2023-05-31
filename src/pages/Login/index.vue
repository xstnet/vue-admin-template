<script setup lang="ts">
import Cache from '@/utils/cache';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
    // 生成假token, 后期做登录的时候再改
    Cache.setToken('xxxxxx');
    console.log('login page');

    const router = useRouter();
    // 登录成功, 跳转到首页
    router.replace('/');
})

</script>

<template>
    <!-- 登录页, 待实现 -->
    <span>登录中, 请稍后...</span>
</template>

<style scoped lang="scss"></style>