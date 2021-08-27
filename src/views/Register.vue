<template>
  <div
    class="
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
      space-y-8">
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
            Register an Account
        </h2>
        <span class="
            text-gray-500">
            Please fill the form
        </span>
        <div class="mt-10 w-full">
            <form @submit.prevent="register">
                <label class="
                    block
                    mb-3
                    text-lg
                    text-gray-700">Username</label>
                <input type="text" class="
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

                    placeholder="ex. John Doe"

                    v-model="username">
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
                >Create Account</button>
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
            >Already have an account ?</span>
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

                @click.prevent="changePage('Login')"
            >Sign in</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    changePage (dir) {
      this.$router.push({
        name: dir
      })
      this.$store.commit('SET_CURR_MENU', dir)
    },
    register () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
        username: this.username
      })
        .then(({ data }) => {
          this.$store.commit('SET_CURR_MENU', 'Login')
          this.$router.push({
            name: 'Login'
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
