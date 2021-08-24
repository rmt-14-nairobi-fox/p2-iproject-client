<template>
  <header class="w-full items-center bg-navbar py-2 px-6 hidden sm:flex">
    <div class="w-1/2"></div>
    <div class="relative w-1/2 flex justify-end">
      <ul class="flex">
        <li class="flex-1 mr-2" v-if="!isAuth">
          <button
            class="
              text-center
              block
              border border-blue-500
              rounded
              py-2
              px-4
              bg-blue-500
              hover:bg-blue-700
              text-white
            "
            @click.prevent="registerClick"
          >
            Register
          </button>
        </li>
        <li class="flex-1 mr-2" v-if="!isAuth">
          <button
            class="
              text-center
              block
              border border-blue-500
              rounded
              py-2
              px-4
              bg-blue-500
              hover:bg-blue-700
              text-white
            "
            @click.prevent="loginClick"
          >
            Login
          </button>
        </li>
        <li class="flex-1 mr-2" v-if="isAuth">
          <button
            class="
              text-center
              block
              rounded
              py-2
              px-4
              bg-btn-in-main-danger
              text-white
            "
            @click.prevent="logoutHandler"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },
  },
  methods: {
    loginClick() {
      this.$router
        .push({
          path: "/login",
          name: "Login",
        })
        .catch(() => {});
    },

    registerClick() {
      this.$router
        .push({
          path: "/register",
          name: "Register",
        })
        .catch(() => {});
    },

    logoutHandler() {
      this.$store.dispatch("logoutFunction");
    },
  },
};
</script>

<style></style>
