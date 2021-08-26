<template>
  <div id="app">
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
