import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = 'https://kebunku-hacktiv8.herokuapp.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    curTable: 'admFarm',
    curPage: 'listCard',
    userInfo: {},
    farmData: [],
    reqData: [],
    farmDetail: {},
    weather: {},
    typeTable: [],
    reqDetail: {}
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
    FILL_FARM_DETAIL(state, payload) {
      state.farmDetail = payload;
    },
    FILL_WEATHER(state, payload) {
      state.weather = payload;
    },
    FILL_CUR_PAGE(state, payload) {
      state.curPage = payload;
    },
    FILL_TYPE_TABLE(state, payload) {
      state.typeTable = payload;
    },
    FILL_REQ_DETAIL(state, payload) {
      state.reqDetail = payload;
    }
  },
  actions: {
    async loginAction(context, payload) {
      try {
        const result = await axios.post(`${baseUrl + payload.addRoute}/login`, payload.data)
        localStorage.setItem('access_token', result.data.access_token)
        context.commit('SWITCH_IS_LOGIN', true)
        context.dispatch('swalSuc', 'login successfull')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async registerAction(context, payload) {
      console.log(payload);
      try {
        const result = await axios.post(`${baseUrl + payload.addRoute}/register`, payload.data)
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

    async getOneFarm(context, payload) {
      try {
        const result = await axios.get(`${baseUrl}/farm/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FILL_FARM_DETAIL', result.data)

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async getWeather(context, payload) {
      try {
        const result = await axios.post(`${baseUrl}/weather`, {
          location: payload
        })

        context.commit('FILL_WEATHER', result.data)
      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async createReq(context, payload) {
      try {
        await axios.post(`${baseUrl}/form`, payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.dispatch('swalSuc', 'succes adding request')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async getType(context) {
      try {
        const result = await axios.get(`${baseUrl}/type`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FILL_TYPE_TABLE', result.data)

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async createFarm(context, payload) {
      try {
        await axios.post(`${baseUrl}/farm`, payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.dispatch('swalSuc', 'succes adding new farm')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async getDetailReq(context, payload) {
      try {
        const result = await axios.get(`${baseUrl}/admin/form/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FILL_REQ_DETAIL', result.data)

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async putFarm(context, payload) {
      try {
        await axios.put(`${baseUrl}/admin/farm/${payload.farmId}`, payload.editForm, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        context.dispatch('swalSuc', 'farm data changed')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async deletingFarm(context, payload) {
      try {
        await axios.delete(`${baseUrl}/admin/farm/${payload.farmId}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            formId: payload.formId
          }
        })
        console.log();
        context.dispatch('swalSuc', 'farm deleted')

      } catch (err) {
        context.dispatch('swalErr', err)
      }
    },

    async sendEmail(context, payload) {
      try {
        await axios.post(`${baseUrl}/email`, payload)

        context.dispatch('swalSuc', 'email has send to customer')

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
        text: `${payload.response.data.msg.join(', ')}`
      })
    }

  },
  modules: {}
})