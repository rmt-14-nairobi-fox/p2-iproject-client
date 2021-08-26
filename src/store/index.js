import Vue from 'vue'
import Vuex from 'vuex'
import mainServer from '../apis/server'

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
    login (context, { email, password }) {
      return mainServer({
        method: 'POST',
        url: '/login',
        data: {
          email,
          password
        }
      })
    },
    glogin (context, payload) {
      return mainServer({
        method: 'POST',
        url: '/glogin',
        data: {
          id_token: payload
        }
      })
    }
  },
  modules: {
  }
})
