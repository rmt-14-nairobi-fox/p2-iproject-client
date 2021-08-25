<template>
  <div class="row h-100">
    <nav
      class="col-2 p-0 bg-dark d-flex flex-column justify-content-center align-items-center"
    >
      <div
        @click="gotoLogin"
        class="w-100 text-light p-3 sidebar-item"
        :class="$route.name === 'Login' ? 'sidebar-item-active' : ''"
      >
        <h5 class="m-0">Login</h5>
      </div>
      <div
        @click="gotoRegister"
        class="w-100 text-light p-3 sidebar-item"
        :class="$route.name === 'Register' ? 'sidebar-item-active' : ''"
      >
        <h5 class="m-0">Register</h5>
      </div>
      <div
        @click="gotoGoogle"
        class="w-100 text-light p-3 sidebar-item"
        :class="$route.name === 'GoogleSignIn' ? 'sidebar-item-active' : ''"
      >
        <h5 class="m-0">Google Sign In</h5>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Auth',
  methods: {
    gotoLogin() {
      this.$router.push({ name: 'Login' });
    },
    gotoRegister() {
      this.$router.push({ name: 'Register' });
    },
    gotoGoogle() {
      this.$router.push({ name: 'GoogleSignIn' });
    },
  },
};
</script>

<style></style>
