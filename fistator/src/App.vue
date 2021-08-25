<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar
  },
  created() {
    const token = localStorage.getItem("access_token") ? true : false
    this.$store.commit("SET_IS_LOGIN", { isLogin: token })   
  }
}
</script>
<style>

</style>
