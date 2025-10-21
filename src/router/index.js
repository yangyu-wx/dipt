import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: '首页 - 数据智能创新中心'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/TeamView.vue'),
    meta: {
      title: '团队介绍 - 数据智能创新中心'
    }
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/ResearchView.vue'),
    meta: {
      title: '研究方向 - 数据智能创新中心'
    }
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import('../views/AchievementsView.vue'),
    meta: {
      title: '成果展示 - 数据智能创新中心'
    }
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    component: () => import('../views/CooperationView.vue'),
    meta: {
      title: '合作交流 - 数据智能创新中心'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router