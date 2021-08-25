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
    component: () => import('../views/LoginTeacher.vue'),
    beforeEnter: ((to, from, next) => {
      if (!localStorage.getItem('access_token') && !localStorage.getItem('role')) {
        next()
      }
    })
  },
  {
    path: '/teachers/register',
    name: 'RegisterTeacher',
    component: () => import('../views/RegisterTeacher.vue'),
    beforeEnter: ((to, from, next) => {
      if (!localStorage.getItem('access_token') && !localStorage.getItem('role')) {
        next()
      }
    })
  },
  {
    path: '/students/login',
    name: 'LoginStudent',
    component: () => import('../views/LoginStudent.vue'),
    beforeEnter: ((to, from, next) => {
      if (!localStorage.getItem('access_token') && !localStorage.getItem('role')) {
        next()
      }
    })
  },
  {
    path: '/students/register',
    name: 'RegisterStudent',
    component: () => import('../views/RegisterStudent.vue'),
    beforeEnter: ((to, from, next) => {
      if (!localStorage.getItem('access_token') && !localStorage.getItem('role')) {
        next()
      }
    })
  },
  {
    path: '/teachers/class',
    name: 'MyClassTeacher',
    component: () => import('../views/DTMyClass'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'teacher') {
          next()
        } else {
          next({ name: 'MyClassStudent' })
        }
      } else {
        next({ name: 'LoginTeacher' })
      }
    })
  },
  {
    path: '/teachers/class/:idClass',
    name: 'TeacherClass',
    component: () => import('../views/DTClass'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'teacher') {
          next()
        } else {
          next({ name: 'MyClassStudent' })
        }
      } else {
        next({ name: 'LoginTeacher' })
      }
    })
  },
  {
    path: '/teachers/class/waiting/:idClass',
    name: 'WaitingClass',
    component: () => import('../views/DTWaiting'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'teacher') {
          next()
        } else {
          next({ name: 'MyClassStudent' })
        }
      } else {
        next({ name: 'LoginTeacher' })
      }
    })
  },
  {
    path: '/teachers/score/:idClass/:idStudent',
    name: 'Score',
    component: () => import('../views/DTScore'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'teacher') {
          next()
        } else {
          next({ name: 'MyClassStudent' })
        }
      } else {
        next({ name: 'LoginTeacher' })
      }
    })
  },
  {
    path: '/teachers/add-class',
    name: 'AddClass',
    component: () => import('../views/DTAdd'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'teacher') {
          next()
        } else {
          next({ name: 'MyClassStudent' })
        }
      } else {
        next({ name: 'LoginTeacher' })
      }
    })
  },
  {
    path: '/students/my-class',
    name: 'MyClassStudent',
    component: () => import('../views/DSMyClass'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'student') {
          next()
        } else {
          next({ name: 'MyClassTeacher' })
        }
      } else {
        next({ name: 'LoginStudent' })
      }
    })
  },
  {
    path: '/students/my-score/:idClass',
    name: 'MyScore',
    component: () => import('../views/DSScore'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'student') {
          next()
        } else {
          next({ name: 'MyClassTeacher' })
        }
      } else {
        next({ name: 'LoginStudent' })
      }
    })
  },
  {
    path: '/students/join-class',
    name: 'Join',
    component: () => import('../views/DSJoin'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'student') {
          next()
        } else {
          next({ name: 'MyClassTeacher' })
        }
      } else {
        next({ name: 'LoginStudent' })
      }
    })
  },
  {
    path: '/students/waiting-class',
    name: 'Waiting',
    component: () => import('../views/DSWaiting'),
    beforeEnter: ((to, from, next) => {
      if (localStorage.getItem('access_token')) {
        if (localStorage.getItem('role') === 'student') {
          next()
        } else {
          next({ name: 'MyClassTeacher' })
        }
      } else {
        next({ name: 'LoginStudent' })
      }
    })
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
