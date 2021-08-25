import Vue from "vue";
import Vuex from "vuex";
import publicURI from "../apis/axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    isLoggedin: false,
    userProfiles: {},
  },
  mutations: {
    TOGGLE_STATE_LOGIN(state) {
      state.isLoggedin = !state.isLoggedin;
    },
    ADD_STATE_USERPROFILES(state, payload) {
      state.userProfiles = payload;
    },
    MUTATE_GET_POSTS(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async loginUser(context, payload) {
      try {
        const result = await publicURI.post("/login", payload);
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

    async addPost(context, payload) {
      try {
        const { name, type, imageUrl } = payload;
        await publicURI({
          method: "POST",
          url: `/animalAdd`,
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
  },
  modules: {},
});
