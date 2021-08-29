import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "",
    component: Home,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "Overview" */ "../views/Overview.vue"),
      },
      {
        path: "/services",
        name: "Services",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "../views/Services.vue"),
      },
      {
        path: "products/:id",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "../views/Products.vue"),
      },
      {
        path: "orders",
        name: "Orders",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/Orders.vue"),
      },
      {
        path: "/order/details/:id",
        name: "OrderDetails",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/OrderDetails.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        component: () =>
          import(/* webpackChunkName: "Settings" */ "../views/Cart.vue"),
      },
      {
        path: "payment",
        name: "Payment",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Payment.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
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
    next({ path: "" });
    Vue.$toast.open({
      message: "You already login!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Register" && localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "You already login!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Products" && !localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Checkout" && !localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Payment" && !localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Orders" && !localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "OrderDetails" && !localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  if (to.name === "Cart" && !localStorage.getItem("access_token")) {
    next({ path: "" });
    Vue.$toast.open({
      message: "Please login first!",
      type: "info",
      position: "top",
    });
  }
  next();
});

export default router;
