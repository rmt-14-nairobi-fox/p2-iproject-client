import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Wishlist from "../views/Wishlist.vue"
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import FormCreate from "../views/FormCreate"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/wishlists",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    path: "/formCreate",
    name: "FormCreate",
    component: FormCreate,
  },
  {
    path: "/formEdit/:id",
    name: "FormEdit",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/FormEdit.vue"),
  },
  {
    path: "/helpCenter",
    name: "HelpCenter",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/HelpCenter.vue"),
  },
  {
    path: "/destinations/:id",
    name: "DetailTravel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailTravel.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
