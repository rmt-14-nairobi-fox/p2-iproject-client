<template>
  <div id="app" class="flex flex-col">
    <div class="h-screen">
      <router-view />
    </div>
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
