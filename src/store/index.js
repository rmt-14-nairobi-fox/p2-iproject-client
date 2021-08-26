import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {},
    curTable: 'admFarm',
    farmData: [],
    reqData: []
  },
  mutations: {
    SWITCH_IS_LOGIN(state, payload) {
      state.isLogin = payload
    },
    FILL_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
    FILL_CUR_TABLE(state, payload) {
      state.curTable = payload;
    },
    FILL_FARM_DATA(state, payload) {
      state.farmData = payload;
    },
    FILL_REQ_DATA(state, payload) {
      state.reqData = payload;
    },
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

    async getUser(context) {
      try {
        const result = await axios.get(`${baseUrl}/user`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FILL_USER_INFO', result.data)

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async getFarm(context) {
      try {
        const result = await axios.get(`${baseUrl}/farm`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FILL_FARM_DATA', result.data)

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async getReq(context) {
      try {
        const result = await axios.get(`${baseUrl}/form`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FILL_REQ_DATA', result.data)

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