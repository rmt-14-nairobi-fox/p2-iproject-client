import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false;
Vue.use(VueToast, { position: "top-right" });
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:8080"
  })
)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
