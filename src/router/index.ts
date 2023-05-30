import Layout from '@/layouts/index.vue';
import Login from '@/pages/Login/index.vue';
import Home from '@/pages/Home/index.vue';
import Exam from '@/pages/Exam/index.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/exam',
        component: Exam
      }
    ]
  }
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes // `routes: routes` 的缩写
});
