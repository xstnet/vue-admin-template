import Layout from '@/layouts/index.vue';
import NotFound from '@/pages/Error/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  { path: '/login', component: import('@/pages/Login/index.vue') },
  {
    path: '/',
    name: '首页',
    component: Layout,
    children: [
      {
        path: '',
        name: '首页',
        component: import('@/pages/Home/index.vue')
      },
      {
        path: '/home',
        name: '首页',
        component: import('@/pages/Home/index.vue')
      },
      {
        path: '/exam',
        name: '考试管理',
        component: import('@/pages/Exam/index.vue')
      },
      {
        path: '/course',
        name: '课程管理',
        children: [
          {
            name: '课程列表',
            path: '',
            component: import('@/pages/Course/Index/index.vue')
          },
          {
            name: '创建图文课程',
            path: '/course/create/text',
            component: import('@/pages/Course/Attachment/index.vue')
          },
          {
            name: '创建音频课程',
            path: '/course/create/audio',
            component: import('@/pages/Course/Attachment/index.vue')
          },
          {
            name: '创建视频课程',
            path: '/course/create/video',
            component: import('@/pages/Course/Attachment/index.vue')
          },
          {
            name: '创建综合课程',
            path: '/course/create/composite',
            component: import('@/pages/Course/Attachment/index.vue')
          },
          {
            name: '素材中心',
            path: '/course/attachment',
            component: import('@/pages/Course/Attachment/index.vue')
          },
          {
            name: '课程分类',
            path: '/course/category',
            component: import('@/pages/Course/Category/index.vue')
          }
        ]
      },
      {
        path: '/:404(.*)*',
        name: 'NotFound',
        component: NotFound
      }
    ]
  }
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes // `routes: routes` 的缩写
});
