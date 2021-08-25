import Vue from "vue";
import Vuex from "vuex";
import localhost from "../APIS/axiosAPI";
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
    COMMIT_CHECKOUT(state, payload) {
      state.dataCheckout = payload;
    },
    COMMIT_TOKEN_TRANSACTION(state, payload) {
      state.tokenTransaction = payload;
    },
    COMMIT_ORDER_DETAIL(state, payload) {
      state.dataOrderDetail = payload;
    },
    COMMIT_DATA_ORDER(state, payload) {
      state.dataOrder = payload;
    },
  },
  actions: {
    async fetchOrdersDetail(context, payload) {
      console.log(payload);
      try {
        const response = await localhost({
          method: "get",
          url: `/orders/${payload}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("COMMIT_ORDER_DETAIL", response.data);
        console.log(response, "response");
        router.push(`/order/details/${payload}`);
      } catch (error) {
        console.log(error, "error fetch order");
      }
    },
    async fetchOrders(context) {
      try {
        const response = await localhost({
          method: "get",
          url: `/orders`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("COMMIT_DATA_ORDER", response.data);
        console.log(response, "response");
      } catch (error) {
        console.log(error, "error fetch order");
      }
    },
    async goCheckout(context, payload) {
      try {
        const response = await localhost({
          method: "post",
          url: `/orders/checkout`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: payload,
        });
        context.commit("COMMIT_TOKEN_TRANSACTION", response.data);
        router.push("/payment");
      } catch (error) {
        console.log(error, "error checkout");
      }
    },
    async fetchProvider(context, payload) {
      try {
        const response = await localhost({
          method: "get",
          url: `/cust/services/${payload}`,
        });
        console.log(response);
        context.commit("COMMIT_PRODUCT", response.data);
      } catch (error) {
        console.log(error.response, "di fetchProv");
      }
    },
    async fetchServices(context) {
      try {
        const response = await localhost({
          method: "get",
          url: `/cust/services/`,
        });

        context.commit("COMMIT_SERVICE", response.data);
      } catch (error) {
        console.log(error.response, "di fetchServ");
      }
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
        router.push("/");
      } catch (error) {
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
        console.log(response, "response regist");
        router.push("/login");
      } catch (error) {
        console.log(error, "di error regist");
      }
    },
  },
  modules: {},
});
