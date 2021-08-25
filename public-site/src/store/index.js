import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";
import router from "@/router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    accommodations: [],
    images: [],
    accommodation: {},
    ownerInfo: {},
    bookmarks: [],
  },
  mutations: {
    FETCH_ISAUTH(state, payload) {
      state.isAuth = payload;
    },
    FETCH_ACCOMMODATIONS(state, payload) {
      state.accommodations = payload;
    },
    FETCH_IMAGES(state, payload) {
      state.images = payload;
    },
    FETCH_ACCOMMODATION(state, payload) {
      state.accommodation = payload;
    },
    FETCH_OWNERINFO(state, payload) {
      state.ownerInfo = payload;
    },
    FETCH_BOOKMARKS(state, payload) {
      state.bookmarks = payload;
    },
  },
  actions: {
    loginFunction(context, payload) {
      axios
        .post("/public/login", {
          email: payload.email,
          password: payload.password,
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("user_Email", data.user_email);
          localStorage.setItem("user_Role", data.user_role);
          localStorage.setItem("user_Id", data.user_id);
          context.commit("FETCH_ISAUTH", true);
          router.push({ path: "/" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    logoutFunction(context) {
      localStorage.clear();
      context.commit("FETCH_ISAUTH", false);
      router.push({ path: "/login" }).catch(() => {});
    },

    registerFunction(context, payload) {
      axios
        .post("/public/register", payload)
        .then(() => {
          router.push({ path: "/login" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    getAccommodationsFunction(context) {
      axios
        .get("/public", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          context.commit("FETCH_ACCOMMODATIONS", data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    getAccommodationFunction(context, payload) {
      axios
        .get(`/public/${+payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          context.commit("FETCH_ACCOMMODATION", data);
          context.commit("FETCH_OWNERINFO", data.User);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    getAllImages(context, payload) {
      axios
        .get(`/public/${+payload}/images`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          context.commit("FETCH_IMAGES", data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    getAllBookmark(context) {
      axios
        .get("/public/savedAccommodations", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          context.commit("FETCH_BOOKMARKS", data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    saveBookmarkFunction(context, payload) {
      axios
        .post(`/public/${+payload}`, null, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          router.push({ path: "/bookmarks" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    unsaveBookmarkFunction(context, payload) {
      axios
        .delete(`/public/${+payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(() => {
          context.dispatch("getAllBookmark");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  modules: {},
});
