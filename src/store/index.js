import Vue from "vue";
import Vuex from "vuex";
import localhost from "../APIS/axiosAPI";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    servicesData: [],
  },
  mutations: {
    LOGIN_STATUS(state, payload) {
      state.isLogin = payload;
    },
    COMMIT_SERVICE(state, payload) {
      state.servicesData = payload;
    },
  },
  actions: {
    async fetchServices(context) {
      try {
        const response = await localhost({
          method: "get",
          url: `/cust/services`,
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
