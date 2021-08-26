<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations({
            switchIsLogin: 'SWITCH_IS_LOGIN'
        })
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.switchIsLogin(true)
    }
  }
}
</script>

<style>

</style>
