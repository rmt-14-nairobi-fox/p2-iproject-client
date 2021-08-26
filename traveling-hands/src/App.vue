<template>
  <div id="app">
    <!-- NAVBAR -->
    <div
      class="
        items-center
        justify-between
        flex
        bg-gray-800 bg-opacity-90
        px-12
        py-4
        my-4
        mx-auto
        shadow-2xl
        w-11/12
      "
      style="width: 100%"
    >
      <div class="text-2xl text-white font-semibold inline-flex items-center">
        <img
          src="https://cdn0.iconfinder.com/data/icons/holidays-icons-rounded/110/Travel-Bag-512.png"
          class="w-16 mr-4"
        />
        <span>Travel Agent</span>
      </div>
      <div>
        <ul class="flex text-white">
          <li class="ml-5 px-2 py-1">
            <router-link to="/">Home</router-link>
          </li>
          <li class="ml-5 px-2 py-1" v-if="!isLoggedIn">
            <router-link to="/login">Sign In</router-link>
          </li>
          <li class="ml-5 px-2 py-1" v-if="!isLoggedIn">
            <router-link to="/register">Sign Up</router-link>
          </li>
          <li
            class="ml-5 px-2 py-1"
            v-if="isLoggedIn && user.role === 'customer'"
          >
            <router-link to="/wishlists">My WishList</router-link>
          </li>
          <li class="ml-5 px-2 py-1" v-if="isLoggedIn && user.role === 'admin'">
            <router-link to="/formCreate">Create Destination</router-link>
          </li>
          <li class="ml-5 px-2 py-1" v-if="isLoggedIn">
            <router-link to="/helpCenter">Help Center</router-link>
          </li>
          <li class="ml-5 px-2 py-1" v-if="isLoggedIn">
            <button @click="signOut">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
    <!-- NAVBAR https://devscorp.medium.com/build-a-navbar-using-tailwind-css-48c4856ed31a -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLoggedIn"]),
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
    checkAccessToken() {
      if (localStorage.getItem("access_token")) {
        this.$store.commit("CHANGE_IS_LOGGED_IN", true);
      }
    },
  },
  created() {
    this.checkAccessToken();
    this.$store.dispatch("findUserLoginned");
  },
};
</script>
