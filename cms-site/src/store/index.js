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
        .get("/accommodations", {
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

    createFunction(context, payload) {
      axios
        .post("/accommodations", payload, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          router
            .push({ path: `/accommodation/${data.id}/images` })
            .catch(() => {});
          Vue.$toast.open({
            message: "Accommodation has been added ",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          context.dispatch("errToast", err);
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
          Vue.$toast.open({
            message: "Accommodation has been edited ",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          Vue.$toast.open({
            message: "Accommodation has been deleted ",
            type: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          context.dispatch("errToast", err);
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
          Vue.$toast.open({
            message: "Image has been added ",
            type: "success",
            duration: 2000,
          });
          // ! cara ini gk hemat
          context.dispatch("getAllImages", +payload.id);
          // context.dispatch("DELETE_IMAGES", data);
        })
        .catch((err) => {
          context.dispatch("errToast", err);
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
          Vue.$toast.open({
            message: "Image has been deleted ",
            type: "success",
            duration: 2000,
          });
          context.commit("ADD_NEW_IMAGE", +payload.imageId);
        })
        .catch((err) => {
          context.dispatch("errToast", err);
        });
    },

    changeStatusFunction(context, payload) {
      console.log(payload);
      axios
        .patch(
          `/accommodations/${+payload.id}`,
          { status: payload.status },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        )
        .then(() => {
          Vue.$toast.open({
            message: "Status has been changed",
            type: "success",
            duration: 2000,
          });
          // console.log("done");
          // ! cara ini gk hemat
          // context.dispatch("getAllImages", +payload.id);
          // context.dispatch("DELETE_IMAGES", data);
        })
        .catch((err) => {
          context.dispatch("errToast", err);
        });
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
  getters: {},
  modules: {},
});
