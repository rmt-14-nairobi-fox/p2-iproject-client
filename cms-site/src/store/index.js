import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";
import router from "@/router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    accommodations: [],
    accommodation: {},
  },
  mutations: {
    FETCH_ISAUTH(state, payload) {
      state.isAuth = payload;
    },
    FETCH_ACCOMMODATIONS(state, payload) {
      state.accommodations = payload;
    },
    FETCH_ACCOMMODATION(state, payload) {
      state.accommodation = payload;
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

    getAccommodationsFunction(context) {
      axios
        .get("/accommodations", {
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

    createFunction(context, payload) {
      axios
        .post("/accommodations", payload, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(() => {
          router.push({ path: "/" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    getAccommodationFunction(context, payload) {
      axios
        .get(`/accommodations/${+payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          context.commit("FETCH_ACCOMMODATION", data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    editAccommodationFunction(context, payload) {
      axios
        .put(`/accommodations/${+payload.id}`, payload, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(() => {
          router.push({ path: "/" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    deleteAccommodationFunction(context, payload) {
      axios
        .delete(`/accommodations/${+payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(() => {
          router.push({ path: "/" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  getters: {},
  modules: {},
});
