<template>
  <section class="flex flex-col main-dark-bg h-screen">
    <Navbar/>
    <div class="overflow-y-auto h-screen pt-32">
      <router-view
      class="mb-32"
      />
      <HFooter
      class="h-20 flex items-center fixed bottom-0 w-full"
      />
    </div>
  </section>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from './components/Footer.vue'
export default {
  components: {
    Navbar,
    HFooter
  },
  created () {
    this.$store.dispatch('fetchCoins')
    this.$store.dispatch('changeCurrency', 'USD')
    if (localStorage.access_token) {
      this.$store.commit('CHANGE_ISLOGIN', true)
    }
  }
}
</script>

<style>
  .main-dark-bg {
    background-color: #082032;
  }
  .main-dark-text {
    color: #082032;
  }
  .accent-grey-1-bg {
    background-color: #2C394B;
  }
  .accent-grey-2-bg {
    background-color: #334756;
  }
  .accent-orange-text {
    color: #FF4C29;
  }
  .accent-orange-bg {
    background-color: #FF4C29;
  }

</style>
