<template>
  <header class="w-full items-center bg-navbar py-2 px-6 hidden sm:flex">
    <div class="w-1/2"></div>
    <div class="relative w-1/2 flex justify-end">
      <ul class="flex">
        <li class="flex-1 mr-2">
          <a
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
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
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
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
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
            href="#"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
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
  },
};
</script>

<style></style>
