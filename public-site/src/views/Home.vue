<template>
  <div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6 mx-80">All Accommodations</h1>
      <accommodations-card
        v-for="accommodation in accommodations"
        :key="accommodation + accommodation.id"
        :accommodation="accommodation"
      ></accommodations-card>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import AccommodationsCard from "@/components/AccommodationsCard.vue";
export default {
  name: "Home",
  components: {
    AccommodationsCard,
  },
  created() {
    this.$store.dispatch("getAccommodationsFunction");
  },
  computed: {
    accommodations() {
      return this.$store.state.accommodations;
    },
    images() {
      return this.$store.state.images;
    },
  },
};
</script>
