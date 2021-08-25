<template>
  <div class="col-md-4 cardcontainer">
    <div class="card cardStyle">
      <img :src="`${item.imageUrl}`" class="card-img-top" width="100%" />
      <div class="card-body px-0">
        <div class="cardBorder">
          <div class="d-flex flex-row justify-content-between mb-0 px-3">
            <h5 class="text-muted">PRICE</h5>
            <h5>{{ item.price }}</h5>
          </div>
          <hr class="mt-2 mx-3" />
          <div class="d-flex flex-row justify-content-between px-3 pb-4">
            <div class="d-flex flex-column">
              <h4 class="text-muted font-weight-bold">
                {{ item.name }}
              </h4>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-between px-3 pb-4">
            <div class="d-flex flex-column">
              <h6
                v-if="item.status === `available`"
                class="text-muted font-weight-bold"
              >
                {{ item.status }}
              </h6>
              <h6 v-else class="text-muted font-weight-bold">
                {{ item.status }} for {{ item.readyIn }} days
              </h6>
            </div>
          </div>
        </div>
        <div class="mx-3 mt-3 mb-2">
          <button
            type="button"
            class="btn btn-danger btn-block"
            @click="buyoutBtn"
            v-if="item.status === `available`"
          >
            <small>Add to cart!</small>
          </button>
          <button
            type="button"
            class="btn btn-primary btn-block"
            v-if="item.status === `pending`"
            @click.prevent="addToWishlistBtn"
          >
            <small>Add to Wishlist</small>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BuyerCard",
  props: ["item"],
  computed: {},
  data() {
    return {
      data: {
        name: this.item.name,
        price: this.item.price,
        id: this.item.id,
      },
    };
  },
  methods: {
    ...mapActions(["createInvoice", "addToWishlist"]),
    buyoutBtn() {
      this.createInvoice(this.data);
    },
    addToWishlistBtn() {
      this.addToWishlist(this.data.id);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

.cardBorder{
  height: 200px;
}

.cardStyle {
  height: 450px;
  margin-bottom: 20px;
}

body {
  background: #f5f1ee;
  font-family: "Roboto", sans-serif;
}

.cardcontainer {
  align-items: center;
  display: flex;
  justify-content: center;
}

.card {
  width: 250px;
  border-radius: 10px;
}

.card-img-top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

span.text-muted {
  font-size: 12px;
}

small.text-muted {
  font-size: 8px;
}

h5.mb-0 {
  font-size: 1rem;
}

small.ghj {
  font-size: 9px;
}

.mid {
  background: #ecedf1;
}

h6.ml-1 {
  font-size: 13px;
}

small.key {
  text-decoration: underline;
  font-size: 9px;
  cursor: pointer;
}

.btn-danger {
  color: #ffcbd2;
}

.btn-danger:focus {
  box-shadow: none;
}

small.justify-content-center {
  font-size: 9px;
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .col-sm-4 {
    margin-bottom: 50px;
  }
}
</style>
