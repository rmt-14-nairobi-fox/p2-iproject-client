import Vue from 'vue'
import Vuex from 'vuex'
import server from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    greetings: ''
  },
  mutations: {
    SET_GREETING (state, data) {
      state.greetings = data
    }
  },
  actions: {
    getStart (context) {
      return new Promise((resolve, reject) => {
        server({
          method: 'GET',
          url: '/'
        })
          .then(({ data }) => {
            context.commit('SET_GREETING', data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getLogin (context, data) {
      return new Promise((resolve, reject) => {
        server({
          method: 'POST',
          url: '/',
          data
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {}
})
