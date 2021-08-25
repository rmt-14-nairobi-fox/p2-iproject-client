<template>
  <nav
    class="col-2 p-0 bg-dark d-flex flex-column justify-content-center align-items-center"
  >
    <div
      @click="gotoLogin"
      class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
      :class="$route.name === 'Login' ? 'sidebar-item-active' : ''"
    >
      <b-icon-person-fill />
      <h5 class="m-0 ml-3">Login</h5>
    </div>
    <div
      @click="gotoRegister"
      class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
      :class="$route.name === 'Register' ? 'sidebar-item-active' : ''"
    >
      <b-icon-person-plus-fill />
      <h5 class="m-0 ml-3">Register</h5>
    </div>
    <div
      @click="gotoGoogle"
      class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
      :class="$route.name === 'GoogleSignIn' ? 'sidebar-item-active' : ''"
    >
      <b-icon-google />
      <h5 class="m-0 ml-3">Google Sign In</h5>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AuthNav',
  methods: {
    gotoLogin() {
      this.$router.push({ name: 'Login' }).catch(() => {});
    },
    gotoRegister() {
      this.$router.push({ name: 'Register' }).catch(() => {});
    },
    gotoGoogle() {
      this.$router.push({ name: 'GoogleSignIn' }).catch(() => {});
    },
  },
};
</script>

<style></style>
