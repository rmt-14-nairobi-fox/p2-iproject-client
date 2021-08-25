<template>
  <div class="h-screen bg-gray-300">
    <div class="py-12">
      <div
        class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl"
      >
        <div class="md:flex">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid md:grid-cols-3 gap-2">
              <div class="col-span-2 p-5">
                <h1 class="text-xl font-medium">Service Cart</h1>
                <CartItem
                  v-for="(item, index) in this.$store.state.cartData"
                  :key="index"
                  :item="item"
                  @sumTotalPrice="sumTotalPrice"
                ></CartItem>

                <div class="flex justify-between items-center border-t">
                  <div class="flex items-center">
                    <i class="fa fa-arrow-left text-sm pr-2"></i>
                  </div>
                  <div class="flex justify-center items-end">
                    Total:
                    <span class="text-sm font-medium text-gray-400 mr-1">
                    </span>
                    <span class="text-lg font-bold text-gray-800">
                      Rp. {{ sumTotalPrice }}</span
                    >
                    <span v-if="sumTotalPrice > 1"
                      >($ {{ this.$store.state.currencyUSD.rates.USD }})</span
                    >
                  </div>
                </div>
              </div>
              <div class="p-5 bg-red-200 rounded overflow-visible">
                <span class="text-xl font-medium text-black block pb-3"
                  >Order Details</span
                >
                <span class="text-xs text-gray-700">Customer Information</span>
                <div
                  class="
                    overflow-visible
                    flex
                    justify-between
                    items-center
                    mt-2
                  "
                ></div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Customer Name</label>
                  <p>{{ this.$store.state.dataLogin.fullName }}</p>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Email</label>
                  <p>{{ this.$store.state.dataLogin.email }}</p>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                  <div class="col-span-2">
                    <label class="text-xs text-gray-500">Address</label>
                    <p>{{ this.$store.state.dataLogin.address }}</p>
                    <div class="grid grid-cols-2 gap-2"></div>
                  </div>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Phone Number</label>
                  <p>{{ this.$store.state.dataLogin.phoneNumber }}</p>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Date Service</label>
                  <input
                    v-model="dateService"
                    type="date"
                    class="
                      focus:outline-none
                      w-full
                      h-6
                      bg-white
                      text-black
                      placeholder-gray-500
                      text-sm
                      py-2
                    "
                  />
                </div>
                <div class="pt-5">
                  <button
                    v-if="sumTotalPrice < 1"
                    class="
                      h-12
                      w-full
                      bg-gray-500
                      rounded
                      focus:outline-none
                      text-black
                    "
                  >
                    Checkout Services
                  </button>
                  <button
                    v-if="sumTotalPrice > 1"
                    @click.prevent="checkoutHandler"
                    type="button"
                    class="
                      h-12
                      w-full
                      bg-red-500
                      rounded
                      focus:outline-none
                      text-black
                      hover:bg-red-700
                    "
                  >
                    Checkout Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      dateService: "",
    };
  },
  created() {
    this.$store.dispatch("currencyAPI", this.sumTotalPrice);
    this.$store.dispatch("fetchUserLogin");
    this.$store.dispatch("fetchOrderDetails");
  },
  computed: {
    sumTotalPrice() {
      let totalPrice = 0;
      this.$store.state.cartData.map((el) => {
        totalPrice += el.price;
      });
      return totalPrice;
    },
  },
  methods: {
    checkoutHandler() {
      let dataOrder = {
        totalPrice: this.sumTotalPrice,
        orderDetails: this.$store.state.cartData,
        custDetails: {
          custName: this.$store.state.dataLogin.fullName,
          email: this.$store.state.dataLogin.email,
          address: this.$store.state.dataLogin.address,
          phoneNumber: this.$store.state.dataLogin.phoneNumber,
          dateService: this.dateService,
        },
      };
      this.$store.dispatch("goCheckout", dataOrder);
    },
  },
};
</script>

<style></style>
