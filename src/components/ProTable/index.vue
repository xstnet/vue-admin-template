<script setup lang="ts" generic="D extends Promise<Api.PaginateResponse<any>>">
import CreateCourseButton from '@/pages/Course/Index/components/CreateCourseButton.vue';
import type { FormInstance, TableProps } from 'element-plus';
import { Ref, UnwrapNestedRefs, watch, watchEffect } from 'vue';
import { reactive, ref, toRefs } from 'vue';
import { useRequest } from 'vue-request';
type Request = (params?: KV | any) => D;
type DataType = Awaited<D> extends { list: (infer T)[] } ? T : never;

interface IProps {
  request: Request;
  title?: string;
  tableProps?: TableProps<DataType>;
  searchForm?: Ref<FormInstance>
  searchFormModel?: KV

}
const props = defineProps<IProps>();

const { request, tableProps, title, searchFormModel } = toRefs(props);
const refreshRequestInc = ref(0);
const currentPage = ref(1);
const pageSizes = ref([10, 20, 30, 50, 100]);
const pageSize = ref(pageSizes.value[0]);

let queryParams = {
  current: currentPage.value,
  pageSize: pageSize.value,
} as KV;


const handleQuery = () => {
  if (!searchFormModel) return;
  queryParams.current = 1;
  queryParams = { ...queryParams, ...searchFormModel.value }
  currentPage.value = 1;
  refresh();
}


const { loading, data, refresh } = useRequest(() => request.value(queryParams), { refreshDeps: [refreshRequestInc], debounceInterval: 50 })


watch([pageSize, currentPage], (_, oldState) => {
  const [oldPageSize] = oldState
  queryParams.current = currentPage.value;
  queryParams.pageSize = pageSize.value;
  if (oldPageSize !== pageSize.value) {
    queryParams.current = 1;
    currentPage.value = 1;
  }
  refreshRequestInc.value++;

})
</script>

<template>
  <div class="pro-table-container">
    <div class="search-form">
      <slot name="searchForm" :handleQuery="handleQuery"></slot>
    </div>
    <div class="pro-table">
      <div class="table-header">
        <div class="title">
          <h4>{{ title || '列表' }}</h4>
        </div>
        <div class="operation">
          <CreateCourseButton />
          <el-button type="danger">批量删除</el-button>
        </div>
      </div>
      <el-table :data="data?.list || []" :row-key="(row) => row.id" v-loading="loading" v-bind="tableProps">
        <slot></slot>
      </el-table>
    </div>
    <div class="pagination" v-show="!loading">
      <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="data?.total || 0"
        :page-sizes="pageSizes" v-model:current-page="currentPage" v-model:page-size="pageSize" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.search-form {
  background-color: var(--el-bg-color);
  padding: 16px;
  border-radius: 4px;

  :deep(.el-form-item) {
    margin-bottom: 0px;
  }
}

.pro-table {
  margin-top: 16px;
  background-color: var(--el-bg-color);
  border-radius: 4px;

  .table-header {
    padding: 0 16px;
    line-height: 48px;
    display: flex;
    justify-content: space-between;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  background-color: var(--el-bg-color);
  padding: 16px;
  border-radius: 4px;
}
</style>