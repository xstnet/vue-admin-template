<script setup lang="ts">
import { reactive } from 'vue';
import CreateCourseButton from './components/CreateCourseButton.vue';
import { getCourseList } from '@/api/course';

interface IProps { }

const tableData = [
    {
        id: 1,
        start_time: '2016-05-03',
        name: 'React 从入门到精通',
        type: '综合课',
        status: 100,
        credit: 100,
        teacher: {
            id: 1,
            name: '张三'
        },
        cover: 'https://i0.hdslb.com/bfs/archive/3086cba16f49bec40a765e2320436b3b18b0bc86.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
    {
        id: 2,
        start_time: '2016-05-03',
        name: 'WebSocket是什么', status: 100,
        type: '图文课',
        credit: 100,
        teacher: {
            id: 1,
            name: '张三'
        },
        cover: 'https://i2.hdslb.com/bfs/archive/12a888dd9f2fb64ce1d32fb075e6e49ffbcd6ea1.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
    {
        id: 2,
        start_time: '2016-05-03',
        name: 'OAuth2.0介绍', status: 100,
        type: '图文课',
        credit: 100,
        teacher: {
            id: 1,
            name: '张三'
        },
        cover: 'https://i2.hdslb.com/bfs/archive/b0fd51d2bbe22d17d694dceb99b879e4eb1f4fde.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
    {
        id: 2,
        start_time: '2016-05-03',
        name: 'Vue3入门', status: 100,
        type: '视频课',
        credit: 100,
        teacher: {
            id: 1,
            name: '张三'
        },
        cover: 'https://i0.hdslb.com/bfs/legacy/660382cf331217801d2d659050a32040151fabd3.png@672w_378h_1c_100q_!web-search-common-cover.webp'
    },
    {
        id: 2, status: 100,
        start_time: '2017-05-03',
        name: 'TCP和UDP的区别',
        type: '视频课',
        credit: 100,
        teacher: {
            id: 1,
            name: '张三'
        },
        cover: 'https://i2.hdslb.com/bfs/archive/1de112ab58dd55fd950ed2854d2b53417c95b4b5.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
]



</script>

<template>
    <div class="course-list">
        <!-- <el-table :data="tableData" type="selection" :row-key="(row) => row.id">
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
            <el-table-column fixed="right" label="操作">
                <template #default>
                    <el-button link type="primary" size="small">编辑</el-button>
                    <el-button link type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table> -->


        <pro-table :request="getCourseList">
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