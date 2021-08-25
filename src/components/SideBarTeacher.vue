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
            <button @click="addClass">CREATE CLASS</button>
          </div>
          <div class="mx-5">
            <button>LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarTeacher",
  methods: {
    addClass() {
      this.$router.push({
        name: "AddClass",
      });
    },
    myClass() {
      this.$router.push({
        name: "MyClassTeacher",
      });
    },
  },
};
</script>

<style>
</style>