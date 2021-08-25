<template>
  <div class="h-100 d-flex flex-column">
    <div class="row flex-grow-1">
      <HomeNav />
      <router-view />
    </div>
    <div class="row">
      <div class="col p-0">
        <HFooter />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HFooter from 'vue-hacktiv8-footer';
import HomeNav from '../components/HomeNav.vue';
export default {
  name: 'Home',
  components: {
    HomeNav,
    HFooter,
  },
};
</script>
