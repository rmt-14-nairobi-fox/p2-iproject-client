import Vue from "vue";
import Vuex from "vuex";
import jikanUrl from "../apis/jikan";
import baseUrl from "../apis/baseUrl";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataAnime: [],
    isLogin: false,
  },
  mutations: {
    FIND_ANIME(state, payload) {
      state.dataAnime = payload;
    },
    LOGIN_SUCCESS(state) {
      state.isLogin = true;
    },
    LOGIN_CHECK(state) {
      if (localStorage.getItem("access_token")) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
  },
  actions: {
    findAnime(context, payload) {
      jikanUrl({
        method: "get",
        url: `${payload}`,
      }).then((res) => {
        context.commit("FIND_ANIME", res.data.results);
      });
    },
    login(context, payload) {
      const { email, password } = payload;
      const data = {
        email: email,
        password: password,
      };
      return baseUrl({
        method: "post",
        url: "/user/login",
        data: data,
      });
    },
  },
  modules: {},
});
