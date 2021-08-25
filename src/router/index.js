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
  },
  {
    path: '/teachers/class',
    name: 'MyClassTeacher',
    component: () => import('../views/DTMyClass')
  },
  {
    path: '/teachers/class/:idClass',
    name: 'TeacherClass',
    component: () => import('../views/DTClass')
  },
  {
    path: '/teachers/class/waiting/:idClass',
    name: 'WaitingClass',
    component: () => import('../views/DTWaiting')
  },
  {
    path: '/teachers/score/:idClass/:idStudent',
    name: 'Score',
    component: () => import('../views/DTScore')
  },
  {
    path: '/teachers/add-class',
    name: 'AddClass',
    component: () => import('../views/DTAdd')
  },
  {
    path: '/students/my-class',
    name: 'MyClassStudent',
    component: () => import('../views/DSMyClass')
  },
  {
    path: '/students/my-score/:idClass',
    name: 'MyScore',
    component: () => import('../views/DSScore')
  },
  {
    path: '/students/join-class',
    name: 'Join',
    component: () => import('../views/DSJoin')
  },
  {
    path: '/students/waiting-class',
    name: 'Waiting',
    component: () => import('../views/DSWaiting')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
