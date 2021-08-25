import Vue from 'vue'
import Vuex from 'vuex'
import fishAxios from "../apis/fish"
import router from '../router'
import Swal from "sweetalert2"
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    fishes: [],
    wishlists: [],
    selectedFish: ""
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload
    },
    SET_FISHES(state, payload) {
      state.fishes = payload
    },
    SET_SELECTED_FISH(state, payload) {
      state.selectedFish = payload
    }
  },
  actions: {
    async login({commit}, payload) {
      try {
        console.log("INI LOGIN")
        console.log(payload)
        const response = await fishAxios.post("/users/login", {
          email: payload.email,
          password: payload.password
        })
        localStorage.setItem("access_token", response.data.access_token)
        commit("SET_IS_LOGIN", {isLogin:true})
        router.push({path: "/"})
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Email/Password combination'
        })
      }
    },

    async getFishes({commit}) {
      try {
        const response = await fishAxios.get("/fishes", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        commit("SET_FISHES", response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Data not found!'
        })
      }
    },

    async getFishByName({commit}, payload) {
      console.log(payload)
      try {
        const response =  await fishAxios.get(`/fishes/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        console.log(response)
        commit("SET_SELECTED_FISH", response.data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
