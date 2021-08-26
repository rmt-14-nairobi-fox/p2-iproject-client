import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";
import router from "@/router/index";

import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    accommodations: [],
    images: [],
    accommodation: {},
    ownerInfo: {},
    bookmarks: [],
    image: {},
    long: 0,
    lat: 0,
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
    FETCH_IMAGE(state, payload) {
      state.image = payload;
    },
    FETCH_LONG(state, payload) {
      state.long = payload;
    },
    FETCH_LAT(state, payload) {
      state.lat = payload;
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
          Vue.$toast.open({
            message: "Login success",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
        });
    },

    logoutFunction(context) {
      localStorage.clear();
      context.commit("FETCH_ISAUTH", false);
      router.push({ path: "/login" }).catch(() => {});
      Vue.$toast.open({
        message: "Logout success",
        type: "success",
        duration: 2000,
      });
    },

    registerFunction(context, payload) {
      axios
        .post("/public/register", payload)
        .then(() => {
          router.push({ path: "/login" }).catch(() => {});
          Vue.$toast.open({
            message: "Success registered!",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          context.dispatch("errToast", err);
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
          context.commit("FETCH_LONG", data.long);
          context.commit("FETCH_LAT", data.lat);
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          context.dispatch("errToast", err);
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
          context.dispatch("errToast", err);
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
          Vue.$toast.open({
            message: "Accommodation has been added to bookmarks ",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          Vue.$toast.open({
            message: "Accommodation has been remove to bookmarks ",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
        });
    },

    async loginAuthFunction(context, payload) {
      try {
        const loginUser = await axios.post(`/public/googleAuth`, {
          idToken: payload,
        });
        context.commit("FETCH_AUTHORIZED", true);
        Vue.$toast.open({
          message: "Login success",
          type: "success",
          duration: 2000,
        });
        localStorage.setItem("access_token", loginUser.data.access_token);
        localStorage.setItem("user_Email", loginUser.data.userEmail);
        localStorage.setItem("user_Role", loginUser.data.userRole);
        localStorage.setItem("user_Id", loginUser.data.userId);
        context.commit("FETCH_ISAUTH", true);

        router.push({ path: "/" }).catch(() => {});
      } catch (err) {
        context.dispatch("errToast", err);
      }
    },

    errToast: function (context, err) {
      if (err.response.data.message) {
        err.response.data.message.map((el) => {
          Vue.$toast.error(el);
        });
      } else {
        Vue.$toast.error(err.response.data);
      }
    },
  },
  modules: {},
});
