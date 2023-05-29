<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';

defineProps();
</script>

<template>
  <el-header class="header">
    <div class="left">
      <div class="logo">logo</div>
      <div class="title-wrap">
        <div class="primary-title">智慧教学平台</div>
        <div class="secondary-title">企业版</div>
      </div>
    </div>
    <div class="right">
      <div class="action-icon">
        <el-badge :value="2" class="icon-badge">
          <svg-icon name="notify" />
        </el-badge>
        <svg-icon name="message" />
        <svg-icon name="logout" />

      </div>
    </div>
  </el-header>
</template>

<style scoped lang="scss">
.header {
  $height: 50px;
  height: $height;
  line-height: $height;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 6px #0000000f;
  z-index: 2;

  .left {
    display: flex;

    .logo {
      margin: 0 10px;
    }

    .title-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .primary-title {
        font-family: "STYuanti-SC-Bold", "STYuanti-SC";
        color: #3B4153;
        font-size: 16px;
        line-height: 16px;
      }

      .secondary-title {
        margin-top: 5px;
        font-family: STYuanti-SC-Regular, STYuanti-SC;
        color: rgba(121, 125, 138, 1);
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  .right {
    .action-icon {
      :deep(.icon) {
        cursor: pointer;
        padding: 0 10px;
        font-size: 18px;
      }

      :deep(.icon-badge .el-badge__content) {
        top: 2px;
        right: 0;
        transform: inherit;
      }

      display: flex;
      align-items: center;
    }
  }
}
</style>
