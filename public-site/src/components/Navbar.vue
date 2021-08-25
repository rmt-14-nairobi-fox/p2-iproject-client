<template>
  <header class="w-full bg-navbar py-5 px-6 hidden sm:flex">
    <div class="flex justify-start">
      <ul class="flex">
        <li class="flex-1 mr-2" v-if="isAuth">
          <button
            class="
              text-center
              block
              rounded
              py-2
              px-4
              bg-btn-in-main
              text-white
            "
            @click="homeClick"
          >
            AllComm
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
              bg-btn-in-main
              text-white
            "
          >
            Bookmarks
          </button>
        </li>
      </ul>
    </div>
    <div class="w-1/2"></div>
    <div class="relative w-1/2 flex justify-end">
      <ul class="flex">
        <li class="flex-1 mr-2" v-if="!isAuth">
          <button
            class="
              text-center
              block
              rounded
              py-2
              px-4
              bg-btn-in-main
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
              rounded
              py-2
              px-4
              bg-btn-in-main
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
  created() {},
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

    homeClick() {
      this.$router
        .push({
          path: "/",
          name: "Home",
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
