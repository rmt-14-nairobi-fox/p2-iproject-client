<template>
  <div class="home">
    <div id="container">
      <!-- Products -->
      <div class="mx-auto pt-4" style="width: 70%">
        <div class="grid grid-cols-3 gap-14">
          <div
            class="bg-gray-400 pt-4 pb-4 rounded-xl shadow-md"
            v-for="travel in travels"
            :key="travel.id"
          >
            <!-- <router-link to=/pub/products/:id></router-link> -->
            <div class="flex flex-col">
              <div class="flex-1 mx-auto">
                <img :src="travel.image" class="w-48 h-48" />
              </div>
              <br>
              <div class="flex-1 mx-auto">
                <span>Name : </span>
                <span class="font-bold">{{ travel.name }}</span>
              </div>
              <!-- <br> -->
              <!-- <div class="flex-1 mx-auto">
                <span>Country : </span>
                <span class="font-bold">{{ travel.country }}</span>
              </div> -->
              <!-- <br> -->
              <div class="flex-1 mx-auto">
                <span>Category : </span>
                <span class="font-bold">{{ travel.Category.name }}</span>
              </div>
              <!-- <br> -->
              <!-- <div class="flex-1 mx-auto font-bold">
                Rp. {{ travel.price }} / Pcs
              </div> -->
              <br v-if="isLoggedIn">
              <br v-if="isLoggedIn">
              <button
                @click="detailTravel(travel.id)"
                v-if="isLoggedIn"
                class="
                  bg-black-500
                  hover:bg-black-700
                  text-white
                  font-bold
                  py-2
                  rounded-full
                "
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
}
.sidebar {
  width: 25%;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLoggedIn"]),
    travels() {
      return this.$store.state.travels;
    },
  },
  methods: {
    async fetchTravels() {
      this.$store.dispatch("findAllDestinations");
    },
    async detailTravel(travelId) {
      this.$store.dispatch("detailTravel", travelId);
    },
  },
  created() {
    this.fetchTravels();
  },
};
</script>
