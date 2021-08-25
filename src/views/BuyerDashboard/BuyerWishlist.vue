<template>
  <div>
    <buyer-navbar></buyer-navbar>
    <div class="container pt-5">
      <div class="row">
        <h1 class="text-center">Your Wishlist</h1>
        <h3 class="text-center">you will be notified on your email once the item is ready</h3>
        <div class="col-md-12 pt-2">
          <div class="row">
            <!-- loop cards disini -->
            <buyer-wishlist-card
              v-for="item in this.wishlistItems"
              :key="item.id"
              :item="item"
            ></buyer-wishlist-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyerNavbar from "../../components/BuyerComponents/BuyerNavbar.vue";
import BuyerWishlistCard from "../../components/BuyerComponents/BuyerWishlistCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "BuyerWishlist",
  components: {
    BuyerNavbar,
    BuyerWishlistCard,
  },
  methods: {
    ...mapActions(["fetchWishlist"]),
  },
  computed: {
    ...mapState([
      "wishlistItems",
      "currentPages",
      "filtered",
      "pages",
      "currentSearch",
    ]),
  },
  created() {
    this.fetchWishlist();
  },
};
</script>

<style>
.paginationcontainer {
  display: flex;
  justify-content: flex-end;
}
</style>
