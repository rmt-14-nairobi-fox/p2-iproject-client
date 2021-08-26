import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/word-game",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !localStorage.access_token) {
    next({ name: "Login" });
  } else if (to.name === "Login" && localStorage.access_token) {
    next({ name: "Home" });
  } else if (to.path === "/") {
    next({ name: "Home" });
  } else {
    next(0);
  }
});

export default router;
