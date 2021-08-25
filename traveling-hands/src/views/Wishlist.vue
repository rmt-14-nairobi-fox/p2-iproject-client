<template>
  <div class="home">
    <div id="container">
      <!-- Products -->
      <div class="mx-auto pt-4" style="width: 70%">
        <div class="grid grid-cols-3 gap-4">
          <div
            class="bg-yellow-100 pt-4 pb-4 rounded-xl shadow-md"
            v-for="product in products"
            :key="product.id"
          >
            <!-- <router-link to=/pub/products/:id></router-link> -->
            <div class="flex flex-col">
              <div class="flex-1 mx-auto">
                <img :src="product.imgUrl" class="w-48 h-48" />
              </div>
              <br>
              <div class="flex-1 mx-auto">
                <span>Name : </span>
                <span class="font-bold">{{ product.name }}</span>
              </div>
              <br>
              <div class="flex-1 mx-auto">
                <span>Description : </span>
                <span class="font-bold">{{ product.description }}</span>
              </div>
              <br>
              <div class="flex-1 mx-auto">
                <span>Category : </span>
                <span class="font-bold">{{ product.Category.name }}</span>
              </div>
              <br>
              <div class="flex-1 mx-auto font-bold">
                Rp. {{ product.price }} / Pcs
              </div>
              <br v-if="isLoggedIn">
              <br v-if="isLoggedIn">
              <button
                @click="addUserBookmark(product.id)"
                v-if="isLoggedIn"
                class="
                  bg-green-500
                  hover:bg-green-700
                  text-white
                  font-bold
                  py-2
                  rounded-full
                "
              >
                Add to Bookmark
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
  //   products() {
  //     return this.$store.state.products;
  //   },
  },
  // methods: {
  //   async fetchProduct() {
  //     this.$store.dispatch("findAllProductWithorWithoutQuery");
  //   },
  //   async addUserBookmark(productId) {
  //     this.$store.dispatch("addUserBookmark", productId);
  //   },
  // },
  // created() {
  //   this.fetchProduct();
  // },
};
</script>
