import Vue from "vue";
import Vuex from "vuex";
import jikanUrl from "../apis/jikan";
import baseUrl from "../apis/baseUrl";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataAnime: [],
    isLogin: false,
    activePage: "",
    animeWillreview: {},
    allDataReview: [],
    allMyDataReview: [],
    myReviewEdit: {},
  },
  mutations: {
    ACTIVE_PAGE(state, payload) {
      state.activePage = payload;
    },
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
    ANIME_WILL_REVIEW(state, payload) {
      state.animeWillreview = payload;
    },
    ALL_REVIEW(state, payload) {
      state.allDataReview = payload;
    },
    ALL_MY_REVIEW(state, payload) {
      state.allMyDataReview = payload;
    },
    DELETE_MY_REVIEW(state, payload) {
      let filterData = state.allMyDataReview.filter((el) => {
        return el.id !== +payload;
      });
      state.allDataReview = filterData;
    },
    DATA_EDIT(state, payload) {
      state.myReviewEdit = payload;
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
    reviewAnime(context, payload) {
      const { url, image_url, title, episodes, rated, userpoin, review, recomendation } = payload;
      const data = {
        url: url,
        image_url: image_url,
        title: title,
        episodes: episodes,
        rated: rated,
        userpoin: userpoin,
        review: review,
        recomendation: recomendation,
      };
      return baseUrl({
        method: "post",
        url: "/review",
        data: data,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    register(context, payload) {
      const { email, password, username } = payload;
      const data = {
        email: email,
        password: password,
        username: username,
      };
      return baseUrl({
        method: "post",
        url: "/user/register",
        data: data,
      });
    },
    allReview() {
      return baseUrl({
        method: "get",
        url: "/review",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    myReview() {
      return baseUrl({
        method: "get",
        url: "/review/myreview",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    deleteReview(context, payload) {
      return baseUrl({
        method: "delete",
        url: `/review/${payload}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    editReviewAnime(context, payload) {
      const { userpoin, review, recomendation } = payload;
      return baseUrl({
        method: "put",
        url: `/review/${payload.id}`,
        data: {
          userpoin: userpoin,
          review: review,
          recomendation: recomendation,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    // loginGoogle(context, payload) {},
  },
  modules: {},
});
