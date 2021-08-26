import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import publicURI from "../apis/axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    isLoggedin: false,
    userProfiles: {},
    userLocation: {},
    ip: "",
  },
  mutations: {
    TOGGLE_STATE_LOGIN(state) {
      state.isLoggedin = !state.isLoggedin;
    },
    ADD_STATE_USERPROFILES(state, payload) {
      state.userProfiles = payload;
    },
    ADD_STATE_USERLOCATION(state, payload) {
      state.userLocation = payload;
    },
    ADD_IP(state, payload) {
      state.ip = payload;
    },
    MUTATE_GET_POSTS(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async loginUser(context, payload) {
      try {
        const result = await publicURI.post("/user/login", payload);
        context.commit("TOGGLE_STATE_LOGIN");
        context.commit("ADD_STATE_USERPROFILES", result.data.userProfile);
        localStorage.setItem(
          "access_token",
          result.data.userProfile.access_token
        );

        await Vue.$toast.open({
          message: "Success login",
          type: "success",
        });
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },

    async addPost(context, payload) {
      try {
        const { name, type, imageUrl } = payload;
        await publicURI({
          method: "POST",
          url: `/animal`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: { name, type, imageUrl },
        });

        await Vue.$toast.open({
          message: "Add post success",
          type: "success",
        });
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data,
          type: "error",
        });
      }
    },

    async fetchPosts(context) {
      try {
        const result = await publicURI.get("/animal");
        context.commit("MUTATE_GET_POSTS", result.data);
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },

    async fetchIP(context) {
      try {
        const ip = await axios.get("https://api.ipify.org");
        context.commit("ADD_IP", ip.data);
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data,
          type: "error",
        });
      }
    },

    async fetchNearbyposts(context, payload) {
      try {
        const ip = payload;
        const result = await publicURI({
          method: "POST",
          url: `/nearbyPost`,
          data: { ip },
        });
        context.commit("MUTATE_GET_POSTS", result.data);
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },
  },
  modules: {},
});
