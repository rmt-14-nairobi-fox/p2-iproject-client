<template>
  <div
    class="
      col-span-4
      sm:col-span-4
      md:col-span-2
      lg:col-span-1
      xl:col-span-1
      flex flex-col
      items-center
    "
  >
    <div class="bg-white rounded-lg mt-5">
      <img :src="service.imgUrl" class="h-40 rounded-md" alt="" />
    </div>
    <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
      <div class="py-5 px-5">
        <span class="font-bold text-gray-800 text-lg">
          <a
            @click.prevent="seeProvider(service.id)"
            href="#"
            class="flex md:inline-flex p-4 items-center hover:text-red-500"
          >
            <span>{{ service.name }}</span>
          </a></span
        >
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-600 font-light">
            {{ service.description }}
          </div>
        </div>
      </div>
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
