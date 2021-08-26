import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Fish from "../views/Fish.vue"
import Wishlist from "../views/Wishlist.vue"
import Register from "../views/Register.vue"

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
    path: "/register",
    name: "Register",
    component: Register
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

router.beforeEach((to, from, next) => {
  if (to.name === "Home" && !localStorage.getItem("access_token")) {
    next({ name: "Login" })
  } else if (to.name === "Register" && localStorage.getItem("access_token")) {
    next({ name: "Home" })
  } else if (to.name === "Login" && localStorage.getItem("access_token")) {
    next({ name: "Home" })
  } else {
    next()
  }
})

export default router
