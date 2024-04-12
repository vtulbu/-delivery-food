import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { PARTNER, paths } from '@/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: paths.home.path,
      name: paths.home.name,
      component: HomeView,
      meta: {
        title: paths.home.title
      }
    },
    {
      path: `/:${PARTNER}`,
      component: () => import('@/views/PartnerMenu.vue'),
      meta: {
        title: 'Меню партнера'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
      name: 'NotFoundView',
      meta: {
        title: 'Страница не найдена'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
  next()
})

export default router
