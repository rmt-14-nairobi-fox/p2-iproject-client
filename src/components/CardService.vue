<template>
  <div
    class="rounded bg-red-100 overflow-hidden shadow-lg"
    style="max-height: 40vh"
  >
    <img
      class="w-full"
      style="min-height: 100px; max-height: 130px; object-fit: cover"
      :src="service.imgUrl"
      alt="Mountain"
    />
    <div class="px-6 py-4">
      <a
        @click.prevent="seeProvider(service.id)"
        href="#"
        class="
          flex
          font-bold
          text-l
          mb-2
          md:inline-flex
          items-center
          hover:text-red-500
        "
      >
        <span>{{ service.name }}</span>
      </a>

      <p class="text-gray-700 text-sm">
        {{ service.description }}
      </p>
    </div>
  </div>
  <!-- end cols -->
</template>

<script>
export default {
  name: "CardService",
  props: ["service"],
  methods: {
    seeProvider(service) {
      this.$store.dispatch("fetchProvider", service);
      this.$router.push(`/products/${service}`);
    },
  },
};
</script>

<style></style>
