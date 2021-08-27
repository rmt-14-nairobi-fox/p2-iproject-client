import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Login from '../views/Login'
import MyPetition from '../views/MyPetition.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/myPetition',
    name: 'Petition',
    component: MyPetition
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, form, next) => {
//   if (localStorage.access_token) {
//     if (to.name === 'Login' || to.name === 'Register') {
//       next({
//         name: 'Home'
//       })
//     } else {
//       next()
//     }
//   } else {
//     if (to.name !== 'Petition') {
//       next()
//     } else {
//       next({
//         name: 'Home'
//       })
//     }
//   }
// })

export default router
