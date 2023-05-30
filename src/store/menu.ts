import { defineStore } from 'pinia';

export interface MenuProps {
  label: string;
  path: string;
  icon?: string;
  children?: MenuProps[];
}

interface State {
  menus: MenuProps[];
}

const initMenus: MenuProps[] = [
  {
    label: '首页',
    path: '/',
    icon: 'home'
  },
  {
    label: '组织管理',
    path: '/organization',
    icon: 'organization',
    children: [{ label: '学员端设置', path: '/live/paper' }]
  },
  {
    label: '课程管理',
    icon: 'course',
    path: '/course',
    children: [{ label: '学员端设置', path: '/live/paper' }]
  },
  {
    label: '直播管理',
    icon: 'course',
    path: '/live',
    children: [{ label: '直播管理', path: '/live/paper' }]
  },
  {
    label: '考试管理',
    icon: 'exam',
    path: '/exam',
    children: [
      { label: '试卷管理', path: '/exam/paper' },
      { label: '题库管理', path: '/exam/question' }
    ]
  },
  {
    label: '学习工具',
    icon: 'tools',
    path: '/tools',
    children: [{ label: '学习工具', path: '/live/paper' }]
  },
  {
    label: '学习统计',
    icon: 'count',
    path: '/count',
    children: [{ label: '学习统计', path: '/live/paper' }]
  },
  {
    label: '学习统计',
    icon: 'count',
    path: '/count',
    children: [{ label: '学习统计', path: '/live/paper' }]
  },
  {
    label: '系统设置',
    icon: 'setting',
    path: '/setting',
    children: [{ label: '系统设置', path: '/live/paper' }]
  },
  {
    label: '学员端设置',
    icon: 'setting',
    path: '/count',
    children: [{ label: '学员端设置', path: '/live/paper' }]
  }
];

export const useMenuStore = defineStore('menu', {
  state: (): State => ({ menus: initMenus }),
  getters: {
    // todo: 实现map
    mapPathToMenu: (state) => state.menus
  },
  actions: {
    setMenus(menus: MenuProps[]) {
      this.menus = menus;
    }
  }
});