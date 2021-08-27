import Vue from "vue";
import Vuex from "vuex";
const baseUrl = "https://storytells.herokuapp.com";
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
    editStory:null,
    rand: []
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
    },
    SET_RAND: (state, data) => {
      state.rand = data.choice
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
        Swal.fire({
          title : 'Login Success',
          text : 'Redirect to home please wait',
          icon : 'success'
        })
      }
      catch(err){
        Swal.fire({
          title : "Failed to login",
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

        let timerInterval
            Swal.fire({
              title : 'Success',  
              html: 'Redirecting to home.....',
              timer: 3000,
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

        localStorage.setItem("access_token", data.access_token)
        context.commit("SET_LOGIN_STATUS_TRUE")
        router.push('/')
      }
      catch(err){
        Swal.fire({
          title : "Failed to register",
          text : err.response.data.messages,
          icon : 'warning'
        })
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
        console.log(err.response);
        let errMsg = ''
        if (err.response.data.messages) {
          errMsg = err.response.data.messages
        }else if(err.response.data.messages === "Internal Server Error"){
          errMsg = 'Invalid input add Story'
        }
        Swal.fire({
          title : "Oops",
          text : errMsg,
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
        context.commit("SET_TEXT_INPUT", {text:""})
        context.dispatch("readStory", {id:data.id})
      }
      catch(err){
        console.log(err.response.name);
        Swal.fire({
          title : "Oops",
          text : err.response.name,
          icon : 'warning'
        })
        router.push({path:'addstory'})
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
    },

    githubLogin : async function(){
    	const client='b84b484aa5e53a45cd5b'
    	try{
    		const data = await axios.get('https://github.com/login/oauth/authorize', {
    			params : {
    				client_id : client,
    				redirect_uri : `${baseUrl}/login`
    			}
    		})
    		console.log(data);
    	}
    	catch(err){
    		console.log(err);
    	}
    },

    getChoice : async function(context){
      try{
        const {data} = await axios.get(`${baseUrl}/stories/random`)
        context.commit("SET_RAND", data)
      }
      catch(err){
        console.log(err);
      }
    }
  },
});
