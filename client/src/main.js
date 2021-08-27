import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mdb-vue-ui-kit/css/mdb.min.css';

// createApp.prototype.$baseEndpoint = "https://freelance-app-hacktiv8.herokuapp.com";
createApp(App).use(store).use(router).mount('#app')
