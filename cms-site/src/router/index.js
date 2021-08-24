import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Register.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/createaccommodation",
    name: "CreateAccommodation",
    component: () =>
      import(
        /* webpackChunkName: "Login" */ "../views/CreateAccommodation.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
