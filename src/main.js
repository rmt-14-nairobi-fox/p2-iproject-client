import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVueIcons } from 'bootstrap-vue';

import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const socket = io('http://localhost:3000');

Vue.use(VueToast);

Vue.use(VueSocketIOExt, socket);

Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
