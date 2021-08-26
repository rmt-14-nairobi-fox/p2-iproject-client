<template>
  <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
          <div class="leading-loose p-10 bg-white rounded shadow-xl">
            <form class="" @submit.prevent="loginHandler">
              <p class="text-lg text-gray-800 font-medium pb-4">Login</p>

              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">
                  Email
                </label>
                <input
                  class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="email"
                  placeholder="Your Email"
                  aria-label="Email"
                  v-model="email"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_password">
                  Password
                </label>
                <input
                  class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_password"
                  name="cus_password"
                  type="password"
                  placeholder="Your Password"
                  aria-label="password"
                  v-model="password"
                />
              </div>

              <div class="mt-6">
                <button
                  class="
                    px-4
                    py-1
                    text-white
                    font-light
                    tracking-wider
                    bg-btn-in-main
                    rounded
                  "
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div class="mt-2 -m-5">
              <button
                @click="loginAuthHandler"
                class="
                  font-bold
                  px-4
                  py-1
                  border-2
                  tracking-wider
                  font-light
                  btn-google-color btn btn-google
                  ml-5
                "
              >
                <div class="flex flex-row">
                  <img
                    class="my-auto pr-2"
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                  />
                  <strong>Login/Register Using Google</strong>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginHandler() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginFunction", payload);
    },
    loginAuthHandler() {
      this.$gAuth
        .signIn()
        .then((res) => {
          const idToken = res.getAuthResponse().id_token;
          return this.$store.dispatch("loginAuthFunction", idToken);
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.btn-google {
  color: #4285f4;
  background-color: #ffffff;
}

.btn {
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 15px;
  cursor: pointer;
}
</style>
