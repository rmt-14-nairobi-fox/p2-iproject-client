import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers/login',
    name: 'LoginTeacher',
    component: () => import('../views/LoginTeacher.vue')
  },
  {
    path: '/teachers/register',
    name: 'RegisterTeacher',
    component: () => import('../views/RegisterTeacher.vue')
  },
  {
    path: '/students/login',
    name: 'LoginStudent',
    component: () => import('../views/LoginStudent.vue')
  },
  {
    path: '/students/register',
    name: 'RegisterStudent',
    component: () => import('../views/RegisterStudent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
