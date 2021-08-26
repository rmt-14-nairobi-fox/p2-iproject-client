<template>
  <div id="app">
    <Navbar></Navbar>

    <router-view />

    <div>
      <HFooter></HFooter>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
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
    HFooter,
  },
};
</script>
<style>
.social-links {
  display: flex;
}
.footer-h8 {
  position: sticky;
}
</style>
