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
                <h1 class="text-xl font-medium">Order Details</h1>
                <DetailItem
                  v-for="order in this.$store.state.dataOrderDetail
                    .OrderDetails"
                  :key="order.id"
                  :order="order"
                ></DetailItem>

                <div class="flex justify-between items-center border-t">
                  <div class="flex items-center">
                    <i class="fa fa-arrow-left text-sm pr-2"></i>
                  </div>
                  <div class="flex justify-center items-end">
                    <span class="text-sm font-medium text-gray-400 mr-1"
                      >Total:</span
                    >
                    <span class="text-lg font-bold text-gray-800">
                      Rp.
                      {{ this.$store.state.dataOrderDetail.totalPrice }}</span
                    >
                    <span
                      v-if="this.$store.state.dataOrderDetail.totalPrice > 1"
                    >
                      ($ {{ this.$store.state.currencyUSD.rates.USD }})
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-5 bg-red-200 rounded overflow-visible">
                <span class="text-xl font-medium text-black block pb-3"
                  >Customer Information</span
                >
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
                  <label class="text-xs text-gray-500">Full Name</label>
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
                </div>
                <div class="pt-5">
                  <button
                    v-if="
                      this.$store.state.dataOrderDetail.isPayment === 'PAID'
                    "
                    class="
                      h-12
                      w-full
                      bg-gray-500
                      rounded
                      focus:outline-none
                      text-black
                    "
                  >
                    {{ this.$store.state.dataOrderDetail.isPayment }}
                  </button>
                  <button
                    v-if="
                      this.$store.state.dataOrderDetail.isPayment === 'PENDING'
                    "
                    @click.prevent="checkoutHandler()"
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
                  <button
                    v-if="
                      this.$store.state.dataOrderDetail.isPayment === 'CANCELED'
                    "
                    class="
                      h-12
                      w-full
                      bg-gray-500
                      rounded
                      focus:outline-none
                      text-black
                      hover:bg-gray-700
                    "
                  >
                    {{ this.$store.state.dataOrderDetail.isPayment }}
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
import DetailItem from "../components/DetailItems.vue";
export default {
  name: "OrderDetails",
  created() {
    // this.$store.dispatch("fetchUserLogin");
    this.$store.dispatch(
      "currencyAPI",
      this.$store.state.dataOrderDetail.totalPrice
    );
    this.$store.dispatch("fetchOrdersDetail", this.$route.params.id);
  },
  components: {
    DetailItem,
  },
  methods: {
    checkoutHandler() {
      const token = this.$store.state.dataOrderDetail.tokenPayment;
      this.$store.commit("COMMIT_TOKEN_TRANSACTION", token);
    },
  },
};
</script>

<style></style>
