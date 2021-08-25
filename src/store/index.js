import Vue from "vue";
import Vuex from "vuex";
const baseUrl = "http://localhost:3000";
import axios from "axios";

Vue.use(Vuex);
import router from "@/router";
export default new Vuex.Store({
  state: {
    userInput: {},
    userInputText: "",
    homeShowStories: [],
    currentPage: 0,
    cover_image_url: ''
  },
  mutations: {
    SET_USER_INPUT_VALUE: (state, payload) => {
      state.userInput = payload;
      router.push("/writer");
    },

    SET_TEXT_INPUT: (state, payload) => {
      state.userInputText = payload.text;
    },

    SET_DATA_STORIES_HOME: (state, datas) => {
      state.homeShowStories = datas;
    },

    SET_IMAGE_URL_UPLOADED: (state, url) => {
      state.cover_image_url = url
    }
  },
  actions: {
    getDataStoriesHome: async function (context, page) {
      const { to } = page;
      // const {to} = action
      try {
        const { data } = await axios.get(`${baseUrl}/stories?page=${to}`);
        console.log(data);
        context.commit("SET_DATA_STORIES_HOME", data);
      } catch (err) {
        console.log(err);
      }
    },

    /*uploadStory: async function (context) {
      try{
        const {data} = await axios.
      }
      catch(err){
        console.log(err);
      }
    }*/
  },
});
