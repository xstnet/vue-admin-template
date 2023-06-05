<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

type Breadcrumb = {
    name: string;
    path: string;
}


const makeBreadcrumbs = (): Breadcrumb[] => {
    const breadcrumbs: Breadcrumb[] = [];
    route.matched.forEach(({ name, path }) => {
        if (name && path && typeof name === 'string') {
            breadcrumbs.push({
                name,
                path
            });
        }
    })
    return breadcrumbs;
}

const breadcrumbs = ref<Breadcrumb[]>(makeBreadcrumbs());



watch(route, () => {
    breadcrumbs.value = makeBreadcrumbs();
})

function watchEffect() {
    throw new Error('Function not implemented.');
}
</script>

<template>
    <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
        <el-breadcrumb-item v-for="breadcrumb in breadcrumbs" :to="{ path: breadcrumb.path }">
            {{ breadcrumb.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style scoped lang="scss">
.breadcrumb {
    padding: 16px 24px 0 24px;
}
</style>