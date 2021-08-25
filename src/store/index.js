import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SWITCH_IS_LOGIN(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    async loginAction(context, payload) {
      try {
        const result = await axios.post(`${baseUrl}/admin/login`, payload)
        localStorage.setItem('access_token', result.data.access_token)
        context.commit('SWITCH_IS_LOGIN', true)
        context.dispatch('swalSuc', 'login successfull')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async registerAction(context, payload) {
      try {
        const result = await axios.post(`${baseUrl}/admin/register`, payload)
        localStorage.setItem('access_token', result.data.access_token)
        context.commit('SWITCH_IS_LOGIN', true)
        context.dispatch('swalSuc', 'register successfull')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    swalSuc(context, payload) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${payload}`,
        showConfirmButton: false,
        timer: 1500
      })
    },

    swalErr(context, payload) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${payload.response.data.message.join(', ')}`
      })
    }

  },
  modules: {}
})