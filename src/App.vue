<template>
  <div id="app">
    <Navbar></Navbar>

    <router-view />

    <div class="bottom-0">
      <!-- <HFooter></HFooter> -->
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
// import HFooter from "vue-hacktiv8-footer";
export default {
  name: "App",
  created() {
    this.$store.dispatch("currencyAPI", 0);

    if (localStorage.getItem("access_token")) {
      this.$store.dispatch("fetchUserLogin");
      this.$store.commit("LOGIN_STATUS", true);
    } else {
      this.$store.commit("LOGIN_STATUS", false);
    }
  },
  components: {
    Navbar,
    // HFooter,
  },
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
