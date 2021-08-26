import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

// GOOGLE AUTH
import GAuth from "vue-google-oauth2";
const gauthOption = {
  clientId: process.env.VUE_APP_GOOGLE_API_KEY,
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
};

Vue.use(GAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
