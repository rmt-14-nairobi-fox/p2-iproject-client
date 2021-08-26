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
              <th class="p-3 text-left">City</th>
              <th class="p-3 text-left">Price</th>
              <th class="p-3 text-left">Category</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-gray-800"
              v-for="(wishlist, index) in wishlists"
              :key="index"
            >
              <td class="p-3">
                <img :src="wishlist.Destination.image" class="w-80 h-60" />
              </td>
              <td class="p-3">{{ wishlist.Destination.name }}</td>
              <td class="p-3 font-bold">{{ wishlist.Destination.country }}</td>
              <td class="p-3">{{ wishlist.Destination.city }}</td>
              <td class="p-3">Rp.{{ wishlist.Destination.price }}</td>
              <td class="p-3">
                {{ wishlist.Destination.Category.name }}
              </td>
              <td class="p-3">
                <button
                  @click.prevent="
                    checkOutPackage(user.email, wishlist.Destination.name, wishlist.Destination.city)
                  "
                  class="
                    p-3
                    bg-green-500
                    hover:bg-green-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                >
                  Check Out Package
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
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
  created() {
    this.fetchAllWishlists();
    this.$store.dispatch("findUserLoginned");
  },
  computed: {
    wishlists() {
      return this.$store.state.wishlists;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    fetchAllWishlists() {
      this.$store.dispatch("fetchAllWishlists");
    },
    checkOutPackage(name, city) {
      console.log("masuk checkout");
      this.$store.dispatch("checkOutPackage", { name, city })
    }
  },
};
</script>
