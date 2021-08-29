<template>
  <div class="services">
    <div class="pt-0">
      <h1 class="font-bold text-2xl">Our Services</h1>
      <div class="px-6 grid grid-cols-4 gap-4 pt-2">
        <CardService
          v-for="service in this.$store.state.servicesData"
          :key="service.id"
          :service="service"
        ></CardService>
      </div>
    </div>
  </div>
</template>

<script>
import CardService from "../components/CardService.vue";
export default {
  name: "services",
  components: {
    CardService,
  },
  created() {
    this.$store.dispatch("fetchServices");
    this.$store.dispatch("fetchUserLogin");
  },
};
</script>

<style scoped>
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: rgb(0, 0, 0);
}
</style>
