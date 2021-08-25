import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdmHome from '../views/admin/AdmHome.vue'
import AdmLogin from '../views/admin/AdmLogin.vue'
import AdmRegister from '../views/admin/AdmRegister.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/',
    name: 'AdmHome',
    component: AdmHome
  },
  {
    path: '/admin/login',
    name: 'AdmLogin',
    component: AdmLogin
  },
  {
    path: '/admin/register',
    name: 'AdmRegister',
    component: AdmRegister
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (!token && to.name === 'AdmHome') {
    next({
      name: 'AdmLogin'
    })

  } else next()

})

export default router