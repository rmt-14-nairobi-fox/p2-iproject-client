<template>
  <section class="fixed shadow shadow-2xl h-24 w-screen accent-grey-2-bg">
    <div class="h-full px-5 py-3 flex justify-between">
      <div class="flex">
        <img src="../assets/CPlogoOnly.png" class="h-full mr-3">
        <router-link to="/coins">
        <a class="hover:text-yellow-600 text-gray-300 text-2xl flex items-center p-4">
          <!-- <i class="fas fa-coins mr-4 w-6"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-currency-exchange mr-4 w-6" viewBox="0 0 16 16">
            <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
          </svg>
          <h1>Coins</h1>
        </a>
        </router-link>
        <router-link to="/watchers" v-if="isLogin === true">
        <a class="hover:text-yellow-600 text-gray-300 text-2xl flex items-center p-4 h-full">
          <!-- <i class="far fa-eye mr-4 w-6"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-4 w-6 bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>
          <h1>Watchers</h1>
        </a>
        </router-link>
      </div>
      <div class="flex">
        <select @change="changeCurrency" v-model="currency" class="accent-grey-2-bg text-white text-xl">
          <option selected v-if="currency === 'USD'" value="USD">USD</option>
          <option v-else value="USD">USD</option>
          <option selected v-if="currency === 'IDR'" value="IDR">IDR</option>
          <option v-else value="IDR">IDR</option>
          <option selected v-if="currency === 'EUR'" value="EUR">EUR</option>
          <option v-else value="EUR">EUR</option>
          <option selected v-if="currency === 'GBP'" value="GBP">GBP</option>
          <option v-else value="GBP">GBP</option>
        </select>
        <router-link to="/login">
        <a v-if="isLogin === false" class="hover:text-yellow-600 text-gray-300 text-2xl flex items-center p-4">
          <!-- <i class="fas fa-sign-in-alt mr-4  w-6"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-4 w-6 bi bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          <h1>Login</h1>
        </a>
        </router-link>
        <router-link to="/register">
          <a v-if="isLogin === false" class="hover:text-yellow-600 text-gray-300 text-2xl flex items-center p-4">
            <!-- <i class="fas fa-align-left mr-4 w-6"></i> -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-4 w-6 bi bi-ui-checks" viewBox="0 0 16 16">
              <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <h1>Register</h1>
          </a>
        </router-link>
        <button @click="logout()" v-if="isLogin === true" class="hover:text-yellow-600 text-gray-300 text-2xl flex items-center p-4">
          <!-- <i class="fas fa-sign-out-alt mr-4  w-6"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-4 w-6 bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          <h1>Logout</h1>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      currency: 'USD'
    }
  },
  name: 'Navbar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    changeCurrency () {
      this.$store.dispatch('changeCurrency', this.currency)
    }
  }
}
</script>

<style>

</style>
