<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
</style>

<script>
export default {
  created() {
    if (localStorage.getItem("access_token")) {
      if (localStorage.getItem("role") === "teacher") {
        this.$router.push({ name: "MyClassTeacher" });
      } else if (localStorage.getItem("role") === "student") {
        this.$router.push({ name: "MyClassStudent" });
      }
    } else {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>