import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueQuillEditor from "./quill";
import Cloudinary from "../cloudinary"
import "./assets/tailwind.css";
import "../cloudinary.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueQuillEditor,
  Cloudinary,
  render: (h) => h(App),
}).$mount("#app");
