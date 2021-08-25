<template>
  <div class="row h-100">
    <AuthNav />
    <router-view />
  </div>
</template>

<script>
import AuthNav from '../components/AuthNav.vue';
export default {
  name: 'Auth',
  components: {
    AuthNav,
  },
};
</script>

<style></style>
