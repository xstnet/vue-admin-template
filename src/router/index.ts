import Layout from '@/layouts/index.vue';
import NotFound from '@/pages/Error/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  { path: '/login', component: import('@/pages/Login/index.vue') },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: import('@/pages/Home/index.vue')
      },
      {
        path: '/home',
        component: import('@/pages/Home/index.vue')
      },
      {
        path: '/exam',
        component: import('@/pages/Exam/index.vue')
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
