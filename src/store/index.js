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
    COMMIT_CHECKOUT(state, payload) {
      state.dataCheckout = payload;
    },
    COMMIT_TOKEN_TRANSACTION(state, payload) {
      state.tokenTransaction = payload;
    },
  },
  actions: {
    async goCheckout(context, payload) {
      try {
        console.log(payload, "<<<<payloadd");
        const response = await localhost({
          method: "post",
          url: `/checkout`,
          data: payload,
        });
        console.log(response, "response");
        context.commit("COMMIT_TOKEN_TRANSACTION", response.data);
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
