<template>
  <div id="app" class="container mx-auto px-4">
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { Navbar },
  name: "App",
  computed: {
    ...mapState(["isLoggedin"]),
  },
  methods: {
    ...mapMutations({ toggleStateLogin: "TOGGLE_STATE_LOGIN" }),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.toggleStateLogin();
    }
  },
};
</script>

<style></style>
