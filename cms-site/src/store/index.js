import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";
import router from "@/router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
  },
  mutations: {
    FETHC_ISAUTH(state, payload) {
      state.isAuth = payload;
    },
  },
  actions: {
    loginFunction(context, payload) {
      axios
        .post("/users/login", {
          email: payload.email,
          password: payload.password,
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("user_Email", data.user_email);
          localStorage.setItem("user_Role", data.user_role);
          localStorage.setItem("user_Id", data.user_id);
          context.commit("FETHC_ISAUTH", true);
          router.push({ path: "/" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    logoutFunction(context) {
      localStorage.clear();
      context.commit("FETHC_ISAUTH", false);
      router.push({ path: "/login" }).catch(() => {});
    },
  },
  modules: {},
});
