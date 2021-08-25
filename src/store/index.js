import Vue from 'vue';
import Vuex from 'vuex';
import server from '../apis/server';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    profile: '',
    user_name: '',
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_PROFILE(state, payload) {
      state.profile = payload;
    },
    SET_USER_NAME(state, payload) {
      state.user_name = payload;
    },
  },
  actions: {
    async checkTokenAction(context) {
      if (localStorage.access_token) {
        context.commit('SET_ISLOGIN', true);
        context.commit('SET_PROFILE', localStorage.profile);
        context.commit('SET_USER_NAME', localStorage.user_name);
      } else {
        context.commit('SET_ISLOGIN', false);
        context.commit('SET_PROFILE', '');
        context.commit('SET_USER_NAME', '');
      }
    },

    async loginAction(context, payload) {
      try {
        const response = await server.post('/users/login', payload);
        localStorage.access_token = response.data.access_token;
        localStorage.user_name = response.data.name;
        localStorage.profile = response.data.imgUrl;

        context.dispatch('checkTokenAction');
        router.push({ name: 'Home' });
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  modules: {},
});
