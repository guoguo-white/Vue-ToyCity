import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  }, {
    path: '/story',
    name: 'story',
    component: () => import('@/views/story.vue')
  }, {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news.vue')
  }, {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product.vue')
  }, {
    path: '/cooperation',
    name: 'cooperation',
    component: () => import('@/views/cooperation.vue')
  }, {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  }

  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
