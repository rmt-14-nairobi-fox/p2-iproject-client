<template>
  <div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6">Accommodations</h1>

      <div class="w-full mt-4">
        <button
          class="
            text-l
            pb-3
            flex
            items-center
            bg-btn-in-main
            font-semibold
            p-3
            mb-5
            rounded-lg
            text-white
          "
          @click="addClick"
        >
          <i class="fas fa-plus mr-3 text-white"></i>
          Add new accommodation
        </button>

        <div class="bg-white overflow-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-400 text-white">
              <tr>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  No.
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Title
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Street
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  City
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Zip Code
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Status
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Price
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Type
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <accommodation-card
                v-for="(accommodation, index) in accommodations"
                :key="accommodation + accommodation.id"
                :accommodation="accommodation"
                :index="index"
              ></accommodation-card>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import AccommodationCard from "../components/AccommodationCard.vue";
export default {
  name: "Home",
  methods: {
    addClick() {
      this.$router
        .push({
          path: "/createaccommodation",
          name: "CreateAccommodation",
        })
        .catch(() => {});
    },
  },
  computed: {
    accommodations() {
      return this.$store.state.accommodations;
    },
  },
  created() {
    this.$store.dispatch("getAccommodationsFunction");
  },
  components: {
    AccommodationCard,
  },
};
</script>
