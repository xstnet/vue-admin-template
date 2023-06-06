<script setup lang="ts" generic="D extends Promise<Api.PaginateResponse<any>>">
import CreateCourseButton from '@/pages/Course/Index/components/CreateCourseButton.vue';
import { TableProps } from 'element-plus';
import { reactive, toRefs } from 'vue';
import { useRequest } from 'vue-request';
type Request = () => D;
type DataType = Awaited<D> extends { list: (infer T)[] } ? T : never;

interface IProps {
    request: Request;
    tableProps?: TableProps<DataType>;

}
const props = defineProps<IProps>();

const { request, tableProps } = toRefs(props);

const { loading, data } = useRequest(request.value)

const formInline = reactive({
    user: '',
    region: '',
})

</script>

<template>
    <div class="pro-table-container">
        <div class="search-form">
            <el-row>
                <el-col :span="20">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="课程名称">
                            <el-input v-model="formInline.user" placeholder="输入课程名称" />
                        </el-form-item>
                        <el-form-item label="课程分类">
                            <el-select v-model="formInline.region" placeholder="选择分类">
                                <el-option label="临床医学" value="shanghai" />
                                <el-option label="外科" value="beijing" />
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button>重置</el-button>
                            <el-button type="primary">查询</el-button>
                            <el-button type="info" text>展开
                                <el-icon>
                                    <ArrowDown />
                                </el-icon></el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="4" style="text-align: right">
                    <CreateCourseButton />
                    <el-button type="danger">批量删除</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="pro-table">
            <el-table :data="data?.list || []" :row-key="(row) => row.id" v-loading="loading">
                <slot></slot>
            </el-table>
        </div>
        <div class="pagination" v-show="!loading">
            <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="data?.total || 0"
                :page-sizes="[10, 20, 30, 50, 100]" />
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
}

.pagination {
    display: flex;
    justify-content: flex-end;
    background-color: var(--el-bg-color);
    padding: 16px;
    border-radius: 4px;
}
</style>