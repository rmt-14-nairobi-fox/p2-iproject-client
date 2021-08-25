import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../apis/server"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[]
  },
  mutations: {
    FETCH_CATEGORIES(state,payload){
      state.categories=payload
    }
  },
  actions: {
    fetchCategories(context){
      axios({
        method:"GET",
        url: "/categories"
      })
      .then(({data})=>{
        context.commit("FETCH_CATEGORIES",data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})
