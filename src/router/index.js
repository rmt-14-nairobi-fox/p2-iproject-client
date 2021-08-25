import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import GoogleSignIn from '../views/GoogleSignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
      {
        path: 'googlesignin',
        name: 'GoogleSignIn',
        component: GoogleSignIn,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.path.includes('/auth') && !localStorage.access_token) {
    next({ name: 'Login' });
  } else if (to.name === 'Auth' && localStorage.access_token) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
