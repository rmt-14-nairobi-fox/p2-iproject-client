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
    images: [],
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
    FETCH_IMAGES(state, payload) {
      state.images = payload;
    },
    DELETE_IMAGES(state, payload) {
      let images = state.images.filter((el) => +el.id !== +payload);
      state.images = images;
    },
    // state.image.push -> teknik hemat nembak api
    ADD_NEW_IMAGE(state, payload) {
      state.images.push(payload);
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

    getAllImages(context, payload) {
      axios
        .get(`/accommodations/${+payload}/images`, {
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

    addImageFunction(context, payload) {
      axios
        .post(`/accommodations/${+payload.id}/images`, payload.data, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(() => {
          // ! cara ini gk hemat
          context.dispatch("getAllImages", +payload.id);
          // context.dispatch("DELETE_IMAGES", data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    deleteImageFunction(context, payload) {
      axios
        .delete(
          `/accommodations/${+payload.accomId}/images/${+payload.imageId}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        )
        .then(() => {
          context.commit("ADD_NEW_IMAGE", +payload.imageId);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  getters: {},
  modules: {},
});
