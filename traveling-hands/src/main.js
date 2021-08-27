import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
// import VueSocketIO from 'vue-socket.io'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

const socket = io('https://i-project-handson-vuex.herokuapp.com');
Vue.use(VueSocketIOExt, socket);
Vue.config.productionTip = false;
Vue.use(VueToast, { position: "top-right" });
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     // connection: "https://i-project-handson-vuex.herokuapp.com"
//     connection: "http://localhost:8080"
//   })
// )

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
