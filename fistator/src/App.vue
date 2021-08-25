<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
    <HFooter/>  
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: "App",
  components: {
    Navbar,
    HFooter
  },
  created() {
    const token = localStorage.getItem("access_token") ? true : false
    this.$store.commit("SET_IS_LOGIN", { isLogin: token })   
  }
}
</script>
<style>

</style>
