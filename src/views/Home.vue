<template>
  <div class="dashboard">
    <Sidebar> </Sidebar>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "Home",
  components: {
    Sidebar,
  },
  created() {
    this.$store.dispatch("fetchUserLogin");
  },
};
</script>
<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: rgb(128, 0, 64);
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>
