<template>
  <body class="font-mono bg-gray-400">
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="
              w-full
              h-auto
              bg-gray-400
              hidden
              lg:block lg:w-1/2
              bg-cover
              rounded-l-lg
            "
            style="
              background-image: url('https://static.vecteezy.com/system/resources/previews/002/111/048/original/online-teaching-app-concept-vector.jpg');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 text-2xl text-center">Welcome to Penganggurans!</h3>
            <form
              @submit.prevent="loginHandler"
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="username"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  class="
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="email"
                  type="text"
                  placeholder="your@mail.com"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div class="mb-4">
                <input
                  class="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                />
                <label class="text-sm" for="checkbox_id"> Remember Me </label>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="
                    w-full
                    px-4
                    py-2
                    font-bold
                    text-white
                    bg-red-500
                    rounded-full
                    hover:bg-red-700
                    focus:outline-none focus:shadow-outline
                  "
                  type="input"
                >
                  Sign In
                </button>
              </div>
              <div class="text-center">
                <a
                  class="
                    inline-block
                    text-sm text-red-500
                    align-baseline
                    hover:text-black
                  "
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a
                  class="
                    inline-block
                    text-sm text-red-500
                    align-baseline
                    hover:text-black
                  "
                  href=""
                >
                  <router-link to="/register">Create an Account!</router-link>
                </a>
                <br />
                OR
                <GoogleLogin
                  :params="params"
                  :renderParams="renderParams"
                  :onSuccess="onSuccess"
                  :onFailure="onFailure"
                ></GoogleLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "483465974444-51nimbi8e3oj1hk5o326uh2ambcr9lpr.apps.googleusercontent.com",
      },
      renderParams: {
        width: 410,
        height: 40,
        longtitle: true,
      },
    };
  },
  methods: {
    loginHandler() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("userLogin", payload);
    },
    onSuccess(googleUser) {
      this.$store.dispatch("loginGoogle", googleUser);
    },
    onFailure() {
      setTimeout(() => {
        this.$toast.open({
          message: "Internal Server Error",
          type: "error",
          position: "top",
        });
        this.$router.push({ name: "Login" });
      }, 3000);
    },
  },
};
</script>

<style scoped>
.login {
  background: url("https://i.pinimg.com/originals/3e/8e/a9/3e8ea960694b21d78937038365b0a14f.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
