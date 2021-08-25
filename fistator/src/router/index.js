import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Fish from "../views/Fish.vue"
import Wishlist from "../views/Wishlist.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/fish/:fishName",
    name: "Fish",
    component: Fish
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
