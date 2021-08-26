import Vue from "vue";
import Vuex from "vuex";
const baseUrl = "http://localhost:3000";
import axios from "axios";
import Swal from "sweetalert2"

Vue.use(Vuex);
import router from "@/router";
export default new Vuex.Store({
  state: {
    isLogin: false,
    userInput: {},
    userInputText: "",
    homeShowStories: [],
    currentPage: 0,
    cover_image_url: '',
    readStory: '',
    pageFilterShowStory: [],
    loginData: null,
    userCreations:[],
    editStory:null
  },
  mutations: {
    SET_USER_INPUT_VALUE: (state, payload) => {
      state.userInput = payload;
      router.push("/writer");
    },

    SET_TEXT_INPUT: (state, payload) => {
      state.userInputText = payload.text;
    },

    SET_DATA_STORIES_HOME: (state, datas) => {
      state.homeShowStories = datas;
    },

    SET_IMAGE_URL_UPLOADED: (state, url) => {
      state.cover_image_url = url
    },
    SET_LOGIN_STATUS_TRUE: (state) => {
      state.isLogin = true
    },

    SET_USER_LOGOUT: (state) => {
      state.isLogin = false
    },
    SET_READ_STORY_STATE: (state, payload) => {
      state.readStory = payload
    },
    SET_SHOW_FILTER_RESULT: (state, datas) => {
      state.pageFilterShowStory = datas
    },
    SET_LOGIN_DATA: (state, data) => {
      state.loginData = data
    },
    SET_USER_CREATION: (state, data) => {
      state.userCreations = data
    },
    SET_DATA_EDIT: (state, data) => {
      state.editStory = data
    }
  },
  actions: {
    getDataStoriesHome: async function (context, page) {
      const { to } = page;
      // const {to} = action
      try {
        const { data } = await axios.get(`${baseUrl}/stories?page=${to}`);
        context.commit("SET_DATA_STORIES_HOME", data);
      } catch (err) {
        console.log(err);
      }
    },

    getDataByTag: async function (context, tag) {
      try {
        const { data } = await axios.get(`${baseUrl}/stories?searchbytag?tag=${tag}`);
        console.log(data);
        context.commit("SET_DATA_STORIES_HOME", data);
      } catch (err) {
        console.log(err);
      }
    },

    addLikePost: async function (context, id) {
      try {
        await axios.post(`${baseUrl}/stories/like`, {
          StoryId : id
        },{
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        // context.dispatch("readStory", {id})
        const {data} = await axios.get(`${baseUrl}/stories/read/${id}`, {
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        context.commit("SET_READ_STORY_STATE", data)
      }
      catch(err){
        console.log(err);
      }
    },

    AddCommentPost: async function (context, payload) {
      try{
        const {reaction , id} = payload
        await axios.post(`${baseUrl}/stories/comment`, {
          reaction,
          StoryId: id
        },{
          headers: {
            access_token : localStorage.getItem("access_token")
          }
        })

        const {data} = await axios.get(`${baseUrl}/stories/read/${id}`, {
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        context.commit("SET_READ_STORY_STATE", data)
      }
      catch(err){
        console.log(err);
      }
    },

    loginUser: async function (context, loginData) {
      try {
        const {email, password} = loginData
        const { data } = await axios.post(`${baseUrl}/user/login`, {
          email,
          password
        })
        localStorage.setItem("access_token", data.access_token)
        context.commit("SET_LOGIN_DATA", data)
        context.commit("SET_LOGIN_STATUS_TRUE")
        router.push('/')
        let timerInterval
        Swal.fire({
          html: 'Redirect to home.....',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      }
      catch(err){
        Swal.fire({
          title : "Failed to register",
          text : err.response.data.messages,
          icon : 'warning'
        })
      }
    },

    signUp: async function (context, payload) {

      try{
        const {name, email, password, date_birth, gender} = payload
        const {data} = await axios.post(`${baseUrl}/user/register`, {
          name,
          email,
          password,
          date_birth,
          gender
        })
        localStorage.setItem("access_token", data.access_token)
        context.commit("SET_LOGIN_STATUS_TRUE")
        router.push('/')
      }
      catch(err){
        console.log(err);
      }
    },

    readStory: async function (context, id) {
      const {id:idRead} = id
      try{
        const {data} = await axios.get(`${baseUrl}/stories/read/${idRead}`, {
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        console.log(data);
        context.commit("SET_READ_STORY_STATE", data)
        router.push({name : 'Read', params : {title : data.title}})
      }
      catch(err){
        Swal.fire({
          title : "Oops",
          text : "You need to login first",
          icon : 'warning'
        })

        router.push({path:'/login'})
      }
    },

    uploadStory: async function (context) {
      const {sinopsis, tag, title} = context.state.userInput
      try{
        const {data} = await axios.post(`${baseUrl}/stories/add`, {
          sinopsis,
          tag,
          title,
          story_text : context.state.userInputText,
          cover_image_url : context.state.cover_image_url
        },{
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        console.log(data);
        context.commit("SET_READ_STORY_STATE", data)
        // router.push({name : 'Read', params : {title : data.title}})
      }
      catch(err){
        console.log(err);
      }
    },

    gLogin : async function(context, id){
      console.log(id);
      try{
        const {data} = await axios.post(`http://localhost:3000/user/oauth`, {
          idToken : id
        })
        console.log(data);
        if (data.data.access_token) {
          
          Swal.fire({
          title : "Login Success",
          text : `Wellcome ${data.data.name}`,
          icon : 'warning'
          })

          localStorage.setItem("access_token", data.data.access_token)
          context.commit("SET_LOGIN_STATUS_TRUE")
          router.push({path: "/", })

        }
      }
      catch(err){
        console.log(err);
      }
    },

    searcByTitle : async function(context,filter){
      try{
        const { data } = await axios.get(`${baseUrl}/stories/searchbyfilter?filter=${filter}`)
        console.log(data);
        context.commit("SET_SHOW_FILTER_RESULT", data)
        router.push('/result')
      }
      catch(err){
        console.log(err);
      }
    },

    seeCreated : async function(context){
      try{
        const { data } = await axios.get(`${baseUrl}/stories/created`, {
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        context.commit("SET_USER_CREATION", data)
        console.log(data);
      }
      catch(err){
        console.log();
      }
    },

    deleteStory : async function(context, id){
      console.log(id);
      try{
        await axios.delete(`${baseUrl}/stories/delete/${id}`, {
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })

        const { data } = await axios.get(`${baseUrl}/stories/created`, {
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        context.commit("SET_USER_CREATION", data)
      }
      catch(err){
        console.log(err.response);
      }
    },

    editStory : async function(context, id){
      console.log(id);
      try{
        const {data} = await axios.get(`${baseUrl}/stories/read/${id}`, {
            headers : {
              access_token : localStorage.getItem("access_token")
            }
          })
        context.commit("SET_DATA_EDIT", data)
        router.push({path:'/editstory'})
      }

      catch(err){
        console.log(err);
      }
    },

    putEdit : async function(context, payload){
      try{
        const {text, id} = payload
        await axios.patch(`${baseUrl}/stories/edit/${id}`, {
          story_text : text
        },{
          headers: {
            access_token : localStorage.getItem("access_token")
          }
        })
        context.dispatch("readStory", {id:id})
      }
      catch(err){
        console.log(err);
      }
    }
  },
});
