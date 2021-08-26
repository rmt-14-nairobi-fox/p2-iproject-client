import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currMenu: '',
    isLogin: false
  },
  mutations: {
    SET_CURR_MENU (state, payload) {
      state.currMenu = payload
    },
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
