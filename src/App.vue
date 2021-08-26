<template>
  <div id="app" class="flex flex-col">
    <router-view />
    <h-footer></h-footer>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "App",
  components: {
    HFooter
  }
};
</script>

<style></style>
