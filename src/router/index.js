import Vue from 'vue'
import VueRouter from 'vue-router'
import AdmHome from '../views/admin/AdmHome.vue'
import AdmLogin from '../views/admin/AdmLogin.vue'
import AdmRegister from '../views/admin/AdmRegister.vue'
import CusHome from '../views/customer/CusHome.vue'
import CusLogin from '../views/customer/CusLogin.vue'
import CusRegister from '../views/customer/CusRegister.vue'
import DetailFarm from '../views/customer/DetailFarm.vue'
import AddFarm from '../views/customer/AddFarm.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/admin',
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
  },
  {
    path: '/',
    name: 'CusHome',
    component: CusHome
  },
  {
    path: '/login',
    name: 'CusLogin',
    component: CusLogin
  },
  {
    path: '/register',
    name: 'CusRegister',
    component: CusRegister
  },
  {
    path: '/farm/:farmId',
    name: 'DetailFarm',
    component: DetailFarm
  },
  {
    path: '/farm',
    name: 'AddFarm',
    component: AddFarm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (!token) {
    if (to.name === 'AdmHome') {
      next({
        name: 'AdmLogin'
      })

    } else if (to.name === 'CusHome') {
      next({
        name: 'CusLogin'
      })

    } else next()
  } else next()
})

export default router