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
    selectedFish: "",
    wishlistFishes: []
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload.isLogin
    },
    SET_FISHES(state, payload) {
      state.fishes = payload
    },
    SET_WISHLISTS(state, payload) {
      state.wishlists = payload
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

    async register(_, payload) {
      try {
        console.log("INI REGISTER")
        console.log(payload)
        const response = await fishAxios.post("/users/register", {
          email: payload.email,
          password: payload.password
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Register completed!',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(response)
        router.push({path: "/login"})
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please input all fields properly'
        })
      }
    },

    googleLogin({commit}, payload) {
      const id_token = payload.getAuthResponse().id_token
      console.log(id_token)
      fishAxios.post("/users/google", {id_token})
      .then(res => {
        console.log(res)
        localStorage.setItem("access_token", res.data.access_token)
        commit("SET_IS_LOGIN", {isLogin: true})
        router.push({path: "/"})
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        console.log(err)
      })
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
    },

    async getWishlist({commit}) {
      try {
        const response = await fishAxios.get("/wishlists", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        const result = await fishAxios.get("/fishes", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        const responseName = response.data.map(el => {
          return el.fishName
        })
        const resultName = result.data.map(el => {
          return el.name.split(" ").join("-").toLowerCase()
        })
        console.log(responseName)
        console.log(resultName)
        let dataArray = []
        for (let i = 0; i < responseName.length; i++) {
          for (let j = 0; j < resultName.length; j++) {
            if (responseName[i] === resultName[j]) {
              dataArray.push(result.data[j])
            }
          }
        }
        console.log(dataArray)
        commit("SET_WISHLISTS", dataArray)
      } catch (err) {
        console.log(err)
      }
    },

    async addFish(_, payload) {
      console.log(payload)
      try {
        const response = await fishAxios.post(`/wishlists/add/${payload}`, _, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        console.log(response)
        Swal.fire("Success!", "Fish has been added", "success")
      } catch (err) {
        console.log(err)
        Swal.fire("Oops!", "Fish couldn't be added", "error")
      }
    },

    async deleteFish({dispatch}, payload) {
      console.log(payload)
      try {
        const response = await fishAxios.delete(`/wishlists/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: {
            payload
          }
        })
        console.log(response)
        Swal.fire("Success!", "Fish has been deleted!", "success")
        dispatch("getWishlist")
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Fish couldn't be deleted!"
        })
      }
    }
  },
  modules: {
  }
})
