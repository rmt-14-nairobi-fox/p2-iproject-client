import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index"
import travelAxios from "../apis/travel"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    travels: [],
    wishlists: [],
    travel: {},
    wishlist: {},
  },
  mutations: {
    FETCHING_ALL_TRAVELS(state, data) {
      state.travels = data;
    },
    FETCHING_ALL_WISHLISTS(state, data) {
      state.wishlists = data;
    },
    FETCHING_ONE_WISHLIST_BY_PK(state, data) {
      state.wishlist = data;
    },
    FETCHING_ONE_TRAVEL_BY_PK(state, data) {
      state.travel = data;
    },
    CHANGE_IS_LOGGED_IN(state, data) {
      state.isLoggedIn = data;
    },
  },
  actions: {
    async handleLogin(context, payload) {
      // console.log(payload, "ini store");
      try {
        // const result = productAxios.post("/customers/login")
        const result = await travelAxios({
          method: "POST",
          url: "/login",
          data: {
            email: payload.email,
            password: payload.password
          }
        })
        localStorage.setItem("access_token", result.data.access_token)
        context.commit("CHANGE_IS_LOGGED_IN", true)
        Vue.$toast.success(`Login Success... Hello ${result.data.email}`);
        if (localStorage.getItem("access_token")) {
          router.push("/")
          Vue.$toast.open({
            message: `Loading Data... please wait`,
            type: "info",
          })
        }
      } catch (err) {
        Vue.$toast.open({
          message: `${err.message}`,
          type: 'error',
        });
      }
    },
    async handleRegister(context, payload) {
      try {
        const result = await travelAxios({
          method: "POST",
          url: "/register",
          data: {
            email: payload.email,
            password: payload.password
          }
        })
        // console.log(result);
        localStorage.setItem("access_token", result.data.access_token)
        context.commit("CHANGE_IS_LOGGED_IN", true)
        Vue.$toast.success(`Login Success... Hello ${result.data.email}`);
        router.push("/")
        Vue.$toast.open({
          message: `Loading Data... please wait`,
          type: "info",
        });
      } catch (err) {
        Vue.$toast.open({
          message: `${err.message}`,
          type: 'error',
        });
      }
    },
    async handleGoogleLogin(context, payload) {
      // console.log(payload.access_token, "ini store"); 
      try {
        const result = await travelAxios({
          method: "POST",
          url: "/auth/google",
          data: {
            access_token: payload.access_token
          }
        })
        localStorage.setItem("access_token", result.data.access_token);
        context.commit("CHANGE_IS_LOGGED_IN", true)
        Vue.$toast.success(`Login Success... Hello ${result.data.email}`);
        router.push("/")
        Vue.$toast.open({
          message: `Loading Data... please wait`,
          type: "info",
        });
      } catch (err) {
        Vue.$toast.open({
          message: `${err.message}`,
          type: 'error',
        });
      }
    },
    async findAllDestinations(context) {
      try {
        const result = await travelAxios({
          method: "GET",
          url: "/destinations",
        })
        context.commit("FETCHING_ALL_TRAVELS", result.data)
        Vue.$toast.open({
          message: `Loading Data... please wait`,
          type: "info",
        })
      } catch (err) {
        Vue.$toast.open({
          message: 'Something went wrong!',
          type: 'error',
        });
      }
    },  
    signOut(context) {
      localStorage.clear()
      context.commit("CHANGE_IS_LOGGED_IN", false)
      Vue.$toast.success(`Sign out success`);
      router.push("/")
    },
  },
  modules: {},
});
