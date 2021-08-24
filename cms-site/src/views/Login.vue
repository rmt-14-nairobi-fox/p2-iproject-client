<template>
  <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
          <div class="leading-loose">
            <form
              class="p-10 bg-white rounded shadow-xl"
              @submit.prevent="loginHandler"
            >
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
                  required=""
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
                  required=""
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
                    bg-gray-900
                    rounded
                  "
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
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
  },
};
</script>

<style></style>
