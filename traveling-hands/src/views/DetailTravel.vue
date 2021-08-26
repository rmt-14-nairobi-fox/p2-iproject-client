<template>
  <section>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="col-span-12">
        <img
          class="w-140 h-80 object-center"
          :src="travel.image"
          alt="Sunset in the mountains"
        />
        <br /><br />
        <div class="overflow-auto lg:overflow-visible content-center">
          <table class="table text-gray-400 border-separate space-y-6 text-sm content-center">
            <thead class="bg-gray-800 text-gray-500 content-center">
              <tr>
                <th class="p-3 text-left">Name</th>
                <th class="p-3 text-left">Country</th>
                <th class="p-3 text-left">City</th>
                <th class="p-3 text-left">Price</th>
                <th
                  v-if="user.role === 'customer' && isLoggedIn"
                  class="p-3 text-left"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-800">
                <td class="p-3">{{ travel.name }}</td>
                <td class="p-3">
                  {{ travel.country }}
                </td>
                <td class="p-3">
                  {{ travel.city }}
                </td>
                <td class="p-3">
                  {{ travel.price }}
                </td>
                <td class="p-3">
                  <button
                    v-if="isLoggedIn && user.role === 'customer'"
                    @click.prevent="addToWishlist(travel.id)"
                    class="
                      p-3
                      bg-green-400
                      hover:bg-green-200
                      text-white
                      font-bold
                      py-2
                      px-4
                      rounded-full
                    "
                  >
                    Add to WishList
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLoggedIn"]),
    travel() {
      return this.$store.state.travel;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    checkAccessToken() {
      if (localStorage.getItem("access_token")) {
        this.$store.commit("CHANGE_IS_LOGGED_IN", true);
      }
    },
    addToWishlist(travelId) {
      this.$store.dispatch("addDestinationToWishlist", travelId);
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchTravel", id);
    this.$store.dispatch("findUserLoginned");
    this.checkAccessToken();
  },
};
</script>
