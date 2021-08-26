import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFileSignature,
  faSignOutAlt,
  faHome,
  faUserPlus,
  faSignInAlt,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFileSignature,
  faSignOutAlt,
  faHome,
  faUserPlus,
  faSignInAlt,
  faFileAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
