<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar/>
    <div
      class="
        flex-1
        mt-16
        py-8
        px-48
      ">
      <router-view/>
    </div>
    <HFooter />
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    HFooter,
    Navbar
  }
}
</script>

<style>
  #app {
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  }
</style>
