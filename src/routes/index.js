import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import routes from './routes'
import Utils from '@/utils/index'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  const user = Utils.localstorage.get('user');
  if (to.path === '/usuarios/cadastro') {
    next()
  } else if (user && user.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
    next()
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' })
    }
    next()
  }
})
export default router
