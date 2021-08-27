import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../APIs/axios'
import exchangeRate from '../APIs/exchangeRate'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    btcPrice: 0,
    coins: [],
    username: '',
    isLogin: false,
    currency: '',
    currencyRatio: 0,
    watchers: []
  },
  mutations: {
    CHANGE_BTCPRICE (state, payload) {
      state.btcPrice = payload
    },
    CHANGE_COINS (state, payload) {
      state.coins = payload
    },
    CHANGE_COIN (state, payload) {
      state.coin = payload
    },
    CHANGE_USERNAME (state, payload) {
      state.username = payload
    },
    CHANGE_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    CHANGE_CURRENCYRATIO (state, payload) {
      state.currencyRatio = payload
    },
    CHANGE_CURRENCY (state, payload) {
      state.currency = payload
    },
    CHANGE_WATCHERS (state, payload) {
      state.watchers = payload
    }
  },
  actions: {
    fetchCoins ({ commit }) {
      axios({
        method: 'GET',
        url: '/coins'
      })
        .then(({ data }) => {
          commit('CHANGE_COINS', data)
          const btcPrice = data.filter(coin => coin.symbol === 'BTC')[0].price
          commit('CHANGE_BTCPRICE', btcPrice)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCoinByPk ({ commit }, payload) {
      // this.fetchCoins()
      // console.log(payload)
      axios({
        method: 'GET',
        url: `/coins/${payload}`
      })
        .then(({ data }) => {
          // console.log(data)
          commit('CHANGE_COIN', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          commit('CHANGE_USERNAME', data.username)
          commit('CHANGE_ISLOGIN', true)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          router.push('/coins')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (_, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout ({ commit }) {
      localStorage.clear()
      commit('CHANGE_ISLOGIN', false)
      commit('CHANGE_USERNAME', '')
      commit('CHANGE_WATCHERS', [])
      router.push('/coins')
    },
    changeCurrency ({ commit }, payload) {
      if (payload === 'USD') {
        commit('CHANGE_CURRENCYRATIO', 1)
        commit('CHANGE_CURRENCY', payload)
      } else {
        exchangeRate({
          method: 'GET',
          url: `/USD/${payload}`
        })
          .then(({ data }) => {
            console.log(data.conversion_rate)
            commit('CHANGE_CURRENCYRATIO', data.conversion_rate)
            commit('CHANGE_CURRENCY', payload)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    fetchWatchers ({ commit }) {
      axios({
        method: 'GET',
        url: '/watchers',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('CHANGE_WATCHERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addWatchers ({ commit }, payload) {
      axios({
        method: 'POST',
        url: `/watchers/${payload}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          minPrice: 0,
          maxPrice: 0
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editWatcher (_, payload) {
      axios({
        method: 'PATCH',
        url: `/watchers/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload.data
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteWatcher (_, payload) {
      axios({
        method: 'DELETE',
        url: `watchers/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.dispatch('fetchWatchers')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
