import Vue from "vue";
import Vuex from "vuex";
import server from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    greetings: "",
    playerId: localStorage.id,
    playerName: localStorage.username,
    letters: "",
    wordDefinition: "",
    score: 0,
    onlineUsers: [],
    messages: []
  },
  mutations: {
    SET_GREETING(state, data) {
      state.greetings = data;
    },
    SET_IDENTITY(state, data) {
      state.playerId = data.id;
      state.playerName = data.username;
    },
    SET_LETTERS(state, data) {
      state.letters = data;
    },
    SET_DEFINITION(state, data) {
      state.wordDefinition = data;
    },
    SET_SCORE(state, data) {
      state.score = data;
    },
    SET_ONLINE_USERS(state, data) {
      state.onlineUsers = data;
    },
    PUSH_MESSAGE(state, payload) {
      state.messages.push(payload);
    }
  },
  actions: {
    getStart(context) {
      return new Promise((resolve, reject) => {
        server({
          method: "GET",
          url: "/"
        })
          .then(({ data }) => {
            context.commit("SET_GREETING", data);
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response.data.message);
          });
      });
    },
    getLogin(context, player) {
      return new Promise((resolve, reject) => {
        server({
          method: "POST",
          url: "/",
          data: {
            player
          }
        })
          .then(({ data }) => {
            localStorage.setItem("access_token", data.token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("id", data.id);
            localStorage.setItem("level", "0");
            context.commit("SET_IDENTITY", data);
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response.data.message);
          });
      });
    },
    getLetters(context, level) {
      return new Promise((resolve, reject) => {
        server({
          method: "GET",
          url: "/letters",
          params: { level },
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            context.commit("SET_LETTERS", data.letters);
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    },
    findWord(context, word) {
      return new Promise((resolve, reject) => {
        server({
          method: "POST",
          url: "/word",
          headers: {
            access_token: localStorage.access_token
          },
          data: { word }
        })
          .then(({ data }) => {
            context.commit("SET_DEFINITION", data.definition);
            context.commit("SET_SCORE", data.totalScore);
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    },
    userLogout(context, data) {
      return new Promise((resolve, reject) => {
        server({
          method: "PATCH",
          url: `/user/${data}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response);
          });
      });
    },
    getUsers(context) {
      return new Promise((resolve, reject) => {
        server({
          method: "GET",
          url: "/users",
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            context.commit("SET_ONLINE_USERS", data);
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response);
          });
      });
    },
    saveScores(context, { score, level }) {
      return new Promise((resolve, reject) => {
        server({
          method: "POST",
          url: "/scores",
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            score,
            level
          }
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  modules: {}
});
