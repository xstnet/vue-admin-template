import { defineStore } from 'pinia';

export interface MenuProps {
  label: string;
  path: string;
  icon?: string;
  hiddeInMenu?: boolean;
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
    children: [
      { label: '学员管理', path: '/organization/student' },
      { label: '讲师管理', path: '/organization/lecturer' },
      { label: '职位管理', path: '/organization/position' },
      { label: '部门管理', path: '/organization/department' },
      { label: '审核列表', path: '/organization/audit' }
    ]
  },
  {
    label: '课程管理',
    icon: 'course',
    path: '/course/',
    children: [
      { label: '课程列表', path: '/course' },
      { label: '课程分类', path: '/course/category' },
      { label: '素材中心', path: '/course/attachment' }
    ]
  },
  {
    label: '直播管理',
    icon: 'course',
    path: '/live',
    children: [
      { label: '会议管理', path: '/live/metting' },
      { label: '会议详情', path: '/live/detail', hiddeInMenu: true }
    ]
  },
  {
    label: '考试管理',
    icon: 'exam',
    path: '/exam',
    children: [
      { label: '试卷管理', path: '/exam/paper' },
      { label: '题库管理', path: '/exam/question' },
      { label: '试卷分类', path: '/exam/paper-category' },
      { label: '题库分类', path: '/exam/question-category' }
    ]
  },
  {
    label: '学习工具',
    icon: 'tools',
    path: '/tools',
    children: [
      { label: '打卡任务', path: '/tools/task/sign-in' },
      { label: '课程任务', path: '/tools/task/course' },
      { label: '考试任务', path: '/tools/task/exam' }
    ]
  },
  {
    label: '学习统计',
    icon: 'count',
    path: '/count',
    children: [
      { label: '分时段学习统计', path: '/count/time-part' },
      { label: '学员学习统计', path: '/count/student' },
      { label: '课程学习统计', path: '/count/course' },
      { label: '试卷成绩统计', path: '/count/paper-record' }
    ]
  },
  {
    label: '系统设置',
    icon: 'setting',
    path: '/setting',
    children: [
      { label: '企业信息', path: '/setting/company-info' },
      { label: '权限管理', path: '/setting/permission' },
      { label: '消息通知', path: '/setting/notifycation' },
      {
        label: '账户安全',
        path: '/setting/security',
        children: [
          { label: '修改手机号', path: '/setting/security/change-phone' },
          { label: '修改密码', path: '/setting/security/change-password' },
          { label: '修改邮箱', path: '/setting/security/change-email' }
        ]
      }
    ]
  },
  {
    label: '学员端设置',
    icon: 'setting',
    path: '/front-setting',
    children: [
      { label: '轮播图管理', path: '/front-setting/carousel' },
      { label: '公告管理', path: '/front-setting/announcement' }
    ]
  }
];

function generateMenuMap(menus: MenuProps[], pathMap: Map<string, MenuProps>) {
  for (const menu of menus) {
    pathMap.set(menu.path, menu); // 添加当前菜单项到路径映射

    if (menu.children) {
      generateMenuMap(menu.children, pathMap); // 递归处理子菜单
    }
  }
}

export const useMenuStore = defineStore('menu', {
  state: (): State => ({ menus: initMenus }),
  getters: {
    mapPathToMenu: (state) => {
      const mapPathToMenu = new Map<string, MenuProps>();
      generateMenuMap(state.menus, mapPathToMenu);
      return mapPathToMenu;
    }
  },
  actions: {
    setMenus(menus: MenuProps[]) {
      this.menus = menus;
    }
  }
});
