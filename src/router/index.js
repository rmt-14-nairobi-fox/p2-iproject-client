import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllReview from "../views/allReview.vue";
import AnimeReview from "../views/reviewAnime.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import MyAnimeReview from "../views/myReview.vue";
import EditReview from "../views/editreview.vue";
import Discuse from "../views/discuse.vue";

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
    component: AllReview,
  },
  {
    path: "/animereview",
    name: "AnimeReview",
    component: AnimeReview,
  },
  {
    path: "/myreview",
    name: "MyAnimeReview",
    component: MyAnimeReview,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/myreview/edit",
    name: "EditReview",
    component: EditReview,
  },
  {
    path: "/discuse",
    name: "Discuse",
    component: Discuse,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("access_token") && to.name === "AllReview") {
    next({ name: "Login" });
  }
  if (!localStorage.getItem("access_token") && to.name === "AnimeReview") {
    next({ name: "Login" });
  }
  if (!localStorage.getItem("access_token") && to.name === "MyAnimeReview") {
    next({ name: "Login" });
  }
  if (!localStorage.getItem("access_token") && to.name === "Discuse") {
    next({ name: "Login" });
  }
  if (localStorage.getItem("access_token") && to.name === "Login") {
    next({ name: "Home" });
  }
  if (localStorage.getItem("access_token") && to.name === "Register") {
    next({ name: "Home" });
  }
  next();
});

export default router;
