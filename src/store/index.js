import Vue from "vue";
import Vuex from "vuex";
import jikanUrl from "../apis/jikan"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataAnime:[]
  },
  mutations: {
    FIND_ANIME(state, payload){
      
      state.dataAnime = payload
    }
  },
  actions: {
    findAnime(context, payload){
      jikanUrl({
        method:"get",
        url:`${payload}`
      })
      .then(res=>{

        console.log(res.data.results)
        context.commit("FIND_ANIME",res.data.results)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  modules: {},
});
