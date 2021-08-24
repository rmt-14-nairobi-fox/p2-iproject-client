import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllReview from "../views/allReview.vue"
import AnimeReview from "../views/reviewAnime.vue"
import Login from "../views/login.vue"
import Register from "../views/register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/allreview",
    name: "AllReview",
    component: AllReview
  },
  { 
    path: "/animereview",
    name: "AnimeReview",
    component: AnimeReview
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
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
