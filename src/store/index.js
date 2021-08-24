import Vue from "vue";
import Vuex from "vuex";
import localhost from "../APIS/axiosAPI";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    LOGIN_STATUS(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    async userLogin(context, payload) {
      try {
        const response = await localhost({
          method: "post",
          url: "/cust/login",
          data: payload,
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("LOGIN_STATUS", true);
        router.push("/");
      } catch (error) {
        router.push("/login");
      }
    },
  },
  modules: {},
});
