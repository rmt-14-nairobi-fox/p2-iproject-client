import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Chat from '../views/Chat.vue'
import Favorite from '../views/Favorite.vue'
import CategoryDetail from '../views/CategoryDetail.vue'
import ProductDetail from '../views/ProductDetail.vue'
import SearchProduct from '../views/SearchProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category/:name',
    name: 'CategoryDetail',
    component: CategoryDetail,
  },
  {
    path: '/product/:name',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/search/:name',
    name: 'SearchProduct',
    component: SearchProduct,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter:(to,from,next)=>{
      if (localStorage.access_token) {
        next('/')
      } else{
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter:(to,from,next)=>{
      if (localStorage.access_token) {
        next('/')
      } else{
        next()
      }
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter:(to,from,next)=>{
      if (localStorage.access_token) {
        next()
      } else{
        next("/login")
      }
    }
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite,
    beforeEnter:(to,from,next)=>{
      if (localStorage.access_token) {
        next()
      } else{
        next("/login")
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
