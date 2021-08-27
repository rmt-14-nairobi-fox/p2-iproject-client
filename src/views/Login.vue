<template>
  <section class="flex flex-col items-center">
    <form @submit.prevent="login" class="rounded-3xl self-center w-3/12 flex flex-col items-center accent-grey-1-bg px-7 py-10">
      <h1 class="text-5xl font-semibold text-white">Login</h1>
      <div class="flex w-full mb-5 mt-10">
        <h3 class="text-white w-4/12 text-3xl font-medium">Email</h3>
        <input v-model="email" type="text" class="w-8/12 bg-gray-300 rounded-lg shadow-inner px-3">
      </div>
      <div class="flex w-full mb-10">
        <h3 class="text-white w-4/12 text-3xl font-medium">Password</h3>
        <input v-model="password" type="password" class="w-8/12 bg-gray-300 rounded-lg shadow-inner px-3">
      </div>
      <div class="flex w-full justify-center">
        <button type="submit" class="text-white text-3xl font-medium accent-orange-bg px-8 py-1 rounded-xl">
          login
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/coins')
    }
  }
}
</script>
