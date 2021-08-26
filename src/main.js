import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

const socket = io("https://word-app-nairobi.herokuapp.com", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});
Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
