import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

const createRouter = ()=>
  new VueRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

const router = createRouter();

/**
 * 刷新、重置路由
 * https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
 */
export function resetRouter() {
  const newRouter = createRouter();
  // @ts-ignore: reset router
  router.matcher = newRouter.matcher;
}
export default router
