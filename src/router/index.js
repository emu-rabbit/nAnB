import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/tutorial',
    component: Layout,
    children: [{
      path: 'tutorial',
      component: () => import('@/views/Tutorial.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
