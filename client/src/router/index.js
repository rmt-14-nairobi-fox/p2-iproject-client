import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/page-chat",
    name: "PageChat",
    component: () => import("../views/PageChat.vue"),
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: () => import("../views/AddPost.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (to.name === "PageChat" && !token) {
    next({ name: "Login" });
  } else if (to.name === "PageChat" && token) {
    next();
  } else {
    next();
  }
});

export default router;
