import Vue from 'vue'
import Vuex from 'vuex'
import mainServer from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currMenu: '',
    isLogin: false,
    listP: []
  },
  mutations: {
    SET_CURR_MENU (state, payload) {
      state.currMenu = payload
    },
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_LIST_P (state, payload) {
      state.listP = payload
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
    },
    register (context, { username, email, password }) {
      return mainServer({
        method: 'POST',
        url: '/register',
        data: {
          username,
          email,
          password
        }
      })
    },
    fetchPetition (context) {
      mainServer({
        method: 'GET',
        url: '/public/home'
      })
        .then(({ data }) => {
          context.commit('SET_LIST_P', data)
        }).catch(({ response: { data } }) => {
          console.log(data.message)
        })
    },
    signPet (context, payload) {
      mainServer({
        method: 'POST',
        url: `/signs/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('Sign succcess')
        }).catch(({ response: { data } }) => {
          console.log(data.message)
        })
    }
  },
  modules: {
  }
})
