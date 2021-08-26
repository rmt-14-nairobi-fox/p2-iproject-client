import Vue from "vue";
import Vuex from "vuex";
import localhost from "../APIS/axiosAPI";
import axios from "axios";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    servicesData: [],
    productData: [],
    dataCheckout: [],
    tokenTransaction: "",
    cartData: [],
    dataOrderDetail: [],
    dataForCheckout: [],
    dataOrder: [],
    dataLogin: [],
    currencyUSD: "",
  },
  mutations: {
    LOGIN_STATUS(state, payload) {
      state.isLogin = payload;
    },
    COMMIT_SERVICE(state, payload) {
      state.servicesData = payload;
    },
    COMMIT_PRODUCT(state, payload) {
      state.productData = payload;
    },
    COMMIT_ADD_CART(state, payload) {
      state.cartData.push(payload);
    },
    COMMIT_RESET_CART(state, payload) {
      state.cartData = payload;
    },
    COMMIT_CHECKOUT(state, payload) {
      state.dataCheckout = payload;
    },
    COMMIT_TOKEN_TRANSACTION(state, payload) {
      state.tokenTransaction = payload;
      router.push("/payment");
    },
    COMMIT_ORDER_DETAIL(state, payload) {
      state.dataOrderDetail = payload;
    },
    COMMIT_DATA_ORDER(state, payload) {
      state.dataOrder = payload;
    },
    COMMIT_USER_ONLINE(state, payload) {
      state.dataLogin = payload;
    },
    COMMIT_CURRENCY(state, payload) {
      state.currencyUSD = payload;
    },
    DELETE_CART_ITEM(state, payload) {
      const newData = state.cartData.filter((el) => el.id !== payload);
      state.cartData = newData;
    },
  },
  actions: {
    async loginGoogle(context, payload) {
      try {
        var profile = payload.getBasicProfile();
        var access_token = payload.getAuthResponse().id_token;
        const response = await localhost({
          method: "post",
          url: "/users/auth/google",
          data: { access_token },
        });
        Vue.$toast.open({
          message: "Login Succes!",
          type: "success",
          position: "top",
        });
        localStorage.setItem("access_token", response.data.access_token);
        context.commit("LOGIN_STATUS", true);
        router.push({ name: "Home" });
      } catch (error) {
        setTimeout(() => {
          Vue.$toast.open({
            message: `${error.response.data}`,
            type: "error",
            position: "top",
          });
          router.push({ name: "Login" });
        }, 3000);
      }
    },
    async currencyAPI(context, payload) {
      try {
        const response = await axios({
          method: "get",
          url: `https://api.frankfurter.app/latest?amount=${payload}&from=IDR&to=USD`,
          headers: { access_token: localStorage.getItem("access_token") },
        });

        context.commit("COMMIT_CURRENCY", response.data);
      } catch (error) {}
    },
    async goCancelOrder(context, payload) {
      try {
        await localhost({
          method: "patch",
          url: `/orders/${payload}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.dispatch("fetchOrders");
        Vue.$toast.open({
          message: "You has been canceled the order!",
          type: "success",
          position: "top",
        });
      } catch (error) {
        Vue.$toast.open({
          message: `${error.response.data}`,
          type: "error",
          position: "top",
        });
      }
    },
    async fetchUserLogin(context) {
      try {
        const response = await localhost({
          method: "get",
          url: `/users`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("COMMIT_USER_ONLINE", response.data);
      } catch (error) {}
    },
    async fetchOrdersDetail(context, payload) {
      try {
        const response = await localhost({
          method: "get",
          url: `/orders/${payload}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("COMMIT_ORDER_DETAIL", response.data);
        router.push(`/order/details/${payload}`);
      } catch (error) {}
    },
    async fetchOrders(context) {
      try {
        const response = await localhost({
          method: "get",
          url: `/orders`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("COMMIT_DATA_ORDER", response.data);
      } catch (error) {}
    },
    async goCheckout(context, payload) {
      try {
        const response = await localhost({
          method: "post",
          url: `/orders/checkout`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: payload,
        });
        context.commit("COMMIT_RESET_CART", []);
        context.commit("COMMIT_TOKEN_TRANSACTION", response.data);
        router.push("/payment");
      } catch (error) {
        Vue.$toast.open({
          message: `${error.response.data}`,
          type: "error",
          position: "top",
        });
      }
    },
    async fetchProvider(context, payload) {
      try {
        const response = await localhost({
          method: "get",
          url: `/cust/services/${payload}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });

        context.commit("COMMIT_PRODUCT", response.data);
      } catch (error) {}
    },
    async fetchServices(context) {
      try {
        const response = await localhost({
          method: "get",
          url: `/cust/services/`,
        });

        context.commit("COMMIT_SERVICE", response.data);
      } catch (error) {}
    },
    async userLogin(context, payload) {
      try {
        const response = await localhost({
          method: "post",
          url: "/users/login",
          data: payload,
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("LOGIN_STATUS", true);
        Vue.$toast.open({
          message: `Login Succes!`,
          type: "success",
          position: "top",
        });
        router.push("/");
      } catch (error) {
        Vue.$toast.open({
          message: `${error.response.data}`,
          type: "error",
          position: "top",
        });
        router.push("/login");
      }
    },
    async userRegist(context, payload) {
      try {
        const response = await localhost({
          method: "post",
          url: "/users/register",
          data: payload,
        });
        Vue.$toast.open({
          message: `Create account success!`,
          type: "success",
          position: "top",
        });
        router.push("/login");
      } catch (error) {
        Vue.$toast.open({
          message: `${error.response.data}`,
          type: "error",
          position: "top",
        });
      }
    },
  },
  modules: {},
});
