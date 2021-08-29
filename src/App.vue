<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "./components/Sidebar.vue";

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
  },
};
</script>
<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.social-links {
  display: flex;
}

.footer-h8 {
  position: sticky;
  height: 10vh;
  bottom: 0;
}

.logo-hacktiv8 {
  position: static;
  max-height: 80px;
}
</style>
