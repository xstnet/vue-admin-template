<script setup lang="ts">
interface IProps {
  name: string;
  fill?: string;
}
const { name, fill } = defineProps<IProps>();
</script>

<template>
  <span>
    <svg class="icon" aria-hidden="true" :fill="fill">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </span>
</template>

<style scoped lang="scss">
// .svg-icon {
//   display: inline-block;
//   width: 1em;
//   height: 1em;
//   vertical-align: -0.15em;
//   fill: currentColor;
//   overflow: hidden;
// }
</style>
