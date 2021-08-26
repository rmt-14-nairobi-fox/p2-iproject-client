<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="col-span-12">
      <div class="overflow-auto lg:overflow-visible">
        <table class="table text-gray-400 border-separate space-y-6 text-sm">
          <thead class="bg-gray-800 text-gray-500">
            <tr>
              <th class="p-3">Image</th>
              <th class="p-3 text-left">Name</th>
              <th class="p-3 text-left">Country</th>
              <th class="p-3 text-left">Category</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-800" v-for="travel in travels" :key="travel.id">
              <td class="p-3">
                <img :src="travel.image" class="w-80 h-40" />
              </td>
              <td class="p-3">{{ travel.name }}</td>
              <td class="p-3">
                {{ travel.country }}
              </td>
              <td class="p-3">
                {{ travel.Category.name }}
              </td>
              <td class="p-3">
                <button
                  @click.prevent="detailTravel(travel.id)"
                  class="
                    p-3
                    bg-gray-400
                    hover:bg-gray-200
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                >
                  Detail
                </button>
                <br v-if="user.role === 'admin'" />
                <br v-if="user.role === 'admin'" />
                <button
                  v-if="user.role === 'admin'"
                  @click.prevent="editTravel(travel.id)"
                  class="
                    p-3
                    bg-yellow-500
                    hover:bg-yellow-400
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                >
                  Edit
                </button>
                <br v-if="user.role === 'admin'" />
                <br v-if="user.role === 'admin'" />
                <button
                  v-if="user.role === 'admin'"
                  @click="deleteTravel(travel.id)"
                  class="
                    p-3
                    bg-red-600
                    hover:bg-red-500
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 7),
tr th:nth-child(n + 7) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>

<script>
export default {
  computed: {
    travels() {
      return this.$store.state.travels;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    fetchTravels() {
      this.$store.dispatch("findAllDestinations");
    },
    detailTravel(travelId) {
      this.$store.dispatch("fetchTravel", travelId);
    },
    deleteTravel(travelId) {
      this.$store.dispatch("deleteTravel", travelId);

    },
    editTravel(travelId) {
      this.$store.dispatch("formEdit", travelId)
    },
  },
  created() {
    this.fetchTravels();
    this.$store.dispatch("findUserLoginned");
  },
};
</script>
