import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { paths } from '@/utils'

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
