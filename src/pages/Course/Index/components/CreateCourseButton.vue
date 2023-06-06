<script setup lang="ts">



</script>

<template>
    <el-popover placement="bottom" :width="300" trigger="click" popper-style="border-radius: 8px; padding: 16px 24px">
        <template #reference>
            <el-button type="primary">添加课程</el-button>
        </template>
        <template #default>
            <div class="popover-body">
                <div class="category">单一课程 <span class="desc">(只有一节或一种课程形式)</span> </div>
                <div class="course-list">
                    <router-link to="/course/create/text" class="course-item">
                        <SvgIcon name="exam" /> 图文课程
                    </router-link>
                    <router-link to="/course/create/audio" class="course-item">
                        <SvgIcon name="exam" /> 音频课程
                    </router-link>
                    <router-link to="/course/create/video" class="course-item">
                        <SvgIcon name="exam" /> 视频课程
                    </router-link>
                </div>
                <div class="category category-index-2">系列课程 <span class="desc">(包含多个章节或课程形式)</span></div>
                <div class="course-list">
                    <router-link to="/course/create/composite" class="course-item">
                        <SvgIcon name="exam" /> 综合课程
                    </router-link>
                </div>
            </div>
        </template>
    </el-popover>
</template>

<style scoped lang="scss">
.popover-body {
    .category {
        color: #333333;
        font-size: 16px;
        line-height: 22px;

        .desc {
            color: #A8AFB4;
            font-size: 14px;
        }

        margin-bottom: 8px;

    }

    .category-index-2 {
        margin-top: 16px;
    }

    .course-list {
        .course-item {
            display: block;
            text-decoration: none !important;
            padding: 6px 4px 6px 4px;

            color: rgba(51, 51, 51, .8);

            &:hover {
                color: rgba(51, 51, 51, 1)
            }
        }
    }
}
</style>