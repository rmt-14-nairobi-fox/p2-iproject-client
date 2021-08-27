<template>
  <div>
    <Navbar />
    <router-view />
    <Footer class="mt-6"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  created() {
    this.$store.dispatch("getDataStoriesHome", { to: 0 });
    if (localStorage.getItem('access_token')) {
      this.$store.commit("SET_LOGIN_STATUS_TRUE")
    }
    this.$store.dispatch("getChoice")
  },
};
</script>

<style></style>
