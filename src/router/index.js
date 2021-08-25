import Vue from "vue";
import VueRouter from "vue-router";
import SellerHome from "../views/SellerDashboard/SellerHome.vue";
import BuyerHome from "../views/BuyerDashboard/BuyerHome.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import AddItem from "../views/SellerDashboard/AddItem.vue"
import BuyerWishlist from "../views/BuyerDashboard/BuyerWishlist.vue"

Vue.use(VueRouter);

const routes = [
  //home page
  {
    path: "/seller",
    name: "SellerHome",
    component: SellerHome,
  },
  {
    path: "/",
    name: "BuyerHome",
    component: BuyerHome,
  },
  //login register
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
    path: "/additem",
    name: "AddItem",
    component: AddItem,
  },
  {
    path: "/wishlist",
    name: "BuyerWishlist",
    component: BuyerWishlist,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
