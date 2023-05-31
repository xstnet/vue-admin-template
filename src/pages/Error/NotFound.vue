<script setup lang="ts">
import { useRoute } from 'vue-router';

interface IProps { }
const route = useRoute();

</script>

<template>
    404 <br>{{ route.path }}
</template>

<style scoped lang="scss"></style>