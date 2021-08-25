<template>
  <div class="col-auto bg-white shadow-xl">
    <div class="p-7">
      <h2 class="font-bold text-2xl">RAPOOT</h2>
      <hr class="my-6" />
      <div class="flex flex-col my-12 space-y-8">
        <div class="uppercase space-y-4">
          <div class="mx-5">
            <button @click="myClass">MY CLASS</button>
          </div>
          <div class="mx-5">
            <button @click="joinClass">JOIN CLASS</button>
          </div>
          <div class="mx-5">
            <button @click="waitingClass">WAITING CLASS</button>
          </div>
          <div class="mx-5">
            <button @click="logout">LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarStudent",
  methods: {
    myClass() {
      this.$router.push({
        name: "MyClassStudent",
      });
    },
    joinClass() {
      this.$router.push({
        name: "Join",
      });
    },
    waitingClass() {
      this.$router.push({
        name: "Waiting",
      });
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>