import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/products/:id",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Payment.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Orders.vue"),
  },
  {
    path: "/order/details/:id",
    name: "OrderDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderDetails.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login" && localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "You already login!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Register" && localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "You already login!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Products" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Checkout" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Payment" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Orders" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "OrderDetails" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Cart" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  next();
});

export default router;
