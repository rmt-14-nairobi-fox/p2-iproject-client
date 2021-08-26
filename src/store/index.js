import Vue from 'vue';
import Vuex from 'vuex';
import server from '../apis/server';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    profile: '',
    user_name: '',
    newsPrefs: [],
    news: {},
    savednews: [],
    graph: {},
    weather: {},
    posts: [],
    myPosts: [],
  },
  mutations: {
    RESET_ALL(state) {
      state.isLogin = false;
      state.profile = '';
      state.user_name = '';
      state.newsPrefs = [];
      state.news = {};
      state.savednews = [];
      state.graph = {};
      state.weather = {};
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_PROFILE(state, payload) {
      state.profile = payload;
    },
    SET_USER_NAME(state, payload) {
      state.user_name = payload;
    },
    SET_NEWSPREFS(state, payload) {
      state.newsPrefs = payload;
    },
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_SAVEDNEWS(state, payload) {
      state.savednews = payload;
    },
    SET_GRAPH(state, payload) {
      state.graph = payload;
    },
    SET_WEATHER(state, payload) {
      state.weather = payload;
    },
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    SET_MYPOSTS(state, payload) {
      state.myPosts = payload;
    },
  },
  actions: {
    async checkTokenAction(context) {
      if (localStorage.access_token) {
        context.commit('SET_ISLOGIN', true);
        context.commit('SET_PROFILE', localStorage.profile);
        context.commit('SET_USER_NAME', localStorage.user_name);
      } else {
        context.commit('SET_ISLOGIN', false);
        context.commit('SET_PROFILE', '');
        context.commit('SET_USER_NAME', '');
      }
    },

    async loginAction(context, payload) {
      try {
        const response = await server.post('/users/login', payload);
        localStorage.access_token = response.data.access_token;
        localStorage.user_name = response.data.name;
        localStorage.profile = response.data.imgUrl;

        context.dispatch('checkTokenAction');
        router.push({ name: 'Home' });
        Vue.$toast.success('Logged in!', {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async registerAction(context, payload) {
      try {
        const response = await server.post('/users/register', payload);
        console.log(response.data);
        Vue.$toast.success('Register success!', {
          position: 'top-right',
        });
        router.push('/auth/login');
      } catch (err) {
        console.log(err.response.data);
        err.response.data.forEach((error) => {
          Vue.$toast.error(error.message, {
            position: 'top-right',
          });
        });
      }
    },

    async googleSignIn(context, payload) {
      try {
        const response = await server.post('/users/google', payload);

        localStorage.access_token = response.data.access_token;
        localStorage.user_name = response.data.name;
        localStorage.profile = response.data.imgUrl;

        context.dispatch('checkTokenAction');
        router.push({ name: 'Home' });
        Vue.$toast.success('Logged in!', {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async fetchNewsPrefs(context) {
      try {
        const response = await server.get('/newsprefs');
        const newsPrefs = response.data.map((pref) => {
          return {
            value: pref.id,
            text: pref.name,
          };
        });
        context.commit('SET_NEWSPREFS', newsPrefs);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async fetchNews(context) {
      try {
        const response = await server.get('/news', {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        context.commit('SET_NEWS', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async saveNews(context, payload) {
      try {
        const response = await server.post(
          '/news',
          { payload },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        console.log(response.data);
        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async fetchSavedNews(context) {
      try {
        const response = await server.get('/news/saved', {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        context.commit('SET_SAVEDNEWS', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async deleteNews(context, payload) {
      try {
        const response = await server.delete('/news/saved/' + payload, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        console.log(response.data);
        context.dispatch('fetchSavedNews');
        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async getGraph(context) {
      try {
        Vue.$toast.info('Loading graph...', {
          position: 'top-right',
        });
        const response = await server.get('/corona');

        context.commit('SET_GRAPH', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    getPosition() {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    },

    async fetchWeather(context) {
      try {
        Vue.$toast.info('Fetching weather data...', {
          position: 'top-right',
        });
        const position = await context.dispatch('getPosition');
        const coords = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };

        const response = await server.post('/weather', coords);
        context.commit('SET_WEATHER', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async searchAction(context, payload) {
      try {
        Vue.$toast.info('Searching news...', {
          position: 'top-right',
        });
        const response = await server.post('/news/search', payload, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        context.commit('SET_NEWS', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async fetchAllPost(context) {
      try {
        const response = await server.get('/posts', {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        context.commit('SET_POSTS', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async fetchAllMyPost(context) {
      try {
        const response = await server.get('/posts/myposts', {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        context.commit('SET_MYPOSTS', response.data);
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async createPostForm(context, payload) {
      try {
        const response = await server.post('/posts', payload, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        console.log(response.data);
        context.dispatch('fetchAllMyPost');
        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async editPostForm(context, payload) {
      try {
        const response = await server.put(
          '/posts/' + payload.post_id,
          payload.form,
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        console.log(response.data);
        context.dispatch('fetchAllMyPost');
        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async deletePost(context, payload) {
      try {
        const response = await server.delete('/posts/' + payload, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        console.log(response.data);
        context.dispatch('fetchAllMyPost');
        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async sendEmail() {
      try {
        const response = await server.get('/news/email', {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(response.data);
        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data.message, {
          position: 'top-right',
        });
      }
    },

    async editProfileAction(context, payload) {
      try {
        const response = await server.patch('/users/edit', payload, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        console.log(response.data);

        localStorage.user_name = response.data.name;

        if (response.data.imgUrl) localStorage.profile = response.data.imgUrl;

        context.dispatch('checkTokenAction');

        router.go(-1);

        Vue.$toast.success(response.data.message, {
          position: 'top-right',
        });
      } catch (err) {
        console.log(err.response.data);
        Vue.$toast.error(err.response.data[0].message, {
          position: 'top-right',
        });
      }
    },

    fetchComment(context, payload) {
      return server.get('/comments', {
        headers: {
          access_token: localStorage.access_token,
          post_id: payload,
        },
      });
    },
  },
  modules: {},
});
