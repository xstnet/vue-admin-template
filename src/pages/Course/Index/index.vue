<script setup lang="ts">
import { reactive } from 'vue';

import { getCourseList } from '@/api/course';


const searchForm = reactive({
    name: '',
    category_id: 0,
})



</script>

<template>
    <div class="course-list">

        <pro-table :request="getCourseList" :searchFormModel="searchForm" title="课程列表">
            <template #searchForm="{ handleQuery }">
                <el-form :model="searchForm">
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <el-form-item label="课程名称" prop="user">
                                <el-input v-model="searchForm.name" placeholder="输入课程名称" />
                            </el-form-item>
                        </el-col>


                        <el-col :span="6">
                            <el-form-item label="课程分类">
                                <el-select v-model="searchForm.category_id" placeholder="选择分类">
                                    <el-option label="临床医学" value="shanghai" />
                                    <el-option label="外科" value="beijing" />
                                </el-select>
                            </el-form-item>
                        </el-col> <el-col :span="6" style="text-align: right;">
                            <el-button>重置</el-button>
                            <el-button type="primary" @click="handleQuery">查询</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </template>
            <el-table-column type="selection" width="40" />
            <el-table-column prop="id" label="ID" width="50" />
            <el-table-column prop="cover" label="封面" width="160">
                <template #default="scope" column>
                    <div>
                        <el-image :src="scope.row.cover" referrerpolicy="no-referrer" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="课程名称" width="180" />
            <el-table-column prop="type" label="课程类型" width="100" />
            <el-table-column prop="teacher.name" label="讲师" width="80" />
            <el-table-column prop="credit" label="学分" width="100" />
            <el-table-column prop="start_time" label="上架时间" width="120" />
            <el-table-column prop="status" label="状态" width="100" />
            <el-table-column prop="created_at" label="创建时间" />
            <el-table-column fixed="right" aligh="right" label="操作" width="200">
                <template #default>
                    <el-button link type="info" size="small">绑定学员</el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                    <el-button link type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </pro-table>
    </div>
</template>

<style scoped lang="scss">
.course-list {
    :deep(img) {
        border-radius: 4px;
    }
}
</style>