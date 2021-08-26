<template>
  <div
    class="
      login
      flex
      justify-center
      items-start
      py-8">
    <div class="
        container
        flex
        flex-col
        items-center
        mx-auto
        space-y-8
        ">
      <div href="#" class="
          flex
          items-center
          text-2xl
          font-medium
          text-white
          cursor-default
          space-x-2
          px-4
          animate-pulse">
        <font-awesome-icon icon="file-signature" />
        <h1>H8-sign-on</h1>
      </div>
      <div class="
        flex
        flex-col
        w-96
        px-6
        py-8
        items-start
        bg-white
        rounded-lg
        shadow-xl">
        <h2 class="
          font-medium
          mb-2
          text-2xl
          text-gray-700">
          Let's maka a CHANGE
        </h2>
        <span class="
          text-gray-500">
          Sign in to your account
        </span>
        <div class="mt-10 w-full">
          <form @submit.prevent="login">
            <label class="
              block
              mb-3
              text-lg
              text-gray-700">Email</label>
            <input type="email" class="
              rounded
              w-full
              h-10
              px-3
              mb-3
              border-2
              placeholder-gray-400
              focus:outline-none
              focus:ring
              focus:ring-nightBlue-2"

              placeholder="your@mail.com"

              v-model="email">
            <label class="
              block
              mb-3
              text-lg
              text-gray-700">Password</label>
            <input type="password" class="
              rounded
              w-full
              h-10
              px-3
              mb-3
              border-2
              placeholder-gray-400
              focus:outline-none
              focus:ring
              focus:ring-nightBlue-2"

              placeholder="secret"

              v-model="password">
            <button type="submit" class="
              h-10
              w-full
              px-5
              my-3
              text-white
              text-medium
              font-semibold
              transition-colors duration-200
              bg-nightBlue-2
              rounded-lg
              hover:bg-nightBlue-4"
            >Sign in</button>
          </form>
        </div>
        <div class="
            w-full
            flex container
            my-3">
            <span class="
              inline-flex
              items-center
              text-center
              text-gray-600"
            >Do not have account ?</span>
            <a class="
              inline-flex
              items-center
              h-6
              px-2.5
              m-2
              text-sm
              text-white
              transition-colors
              duration-200
              bg-gray-500
              rounded-md
              focus:shadow-outline
              hover:bg-gray-700"

              href="#"
              @click.prevent="changePage('Register')"
          >Create Account</a>
        </div>
        <div class="
          flex
          flex-col
          items-center
          w-full">
          <h6 class="text-gray-600 mb-3">Or</h6>
          <GoogleLogin class="text-center" :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Login',
  components: {
    GoogleLogin
  },
  data () {
    return {
      email: '',
      password: '',
      params: {
        client_id: '222051788876-dfvtsdh3egl959lnop7lrphdulej23op.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    changePage (dir) {
      this.$router.push({
        name: dir
      })
      this.$store.commit('SET_CURR_MENU', dir)
    },
    onSuccess (googleUser) {
      const idToken = googleUser.getAuthResponse().id_token
      this.$store.dispatch('glogin', idToken)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$store.commit('SET_CURR_MENU', 'Home')
          this.$store.commit('SET_IS_LOGIN', true)
          this.$router.push({
            name: 'Home'
          })
        }).catch(({ response: { data } }) => {
          console.log(data.message)
        })
    },
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$store.commit('SET_CURR_MENU', 'Home')
          this.$store.commit('SET_IS_LOGIN', true)
          this.$router.push({
            name: 'Home'
          })
        }).catch(({ response: { data } }) => {
          console.log(data.message)
        })
    }
  }
}
</script>

<style>

</style>
