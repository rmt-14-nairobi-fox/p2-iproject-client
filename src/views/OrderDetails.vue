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
                <h1 class="text-xl font-medium">Item Details</h1>
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
                  <label class="text-xs text-gray-500">Full Name</label>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Email</label>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                  <div class="col-span-2">
                    <label class="text-xs text-gray-500">Address</label>
                    <div class="grid grid-cols-2 gap-2"></div>
                  </div>
                  <div class="">
                    <label class="text-xs text-gray-500">Postal Code</label>
                  </div>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Phone Number</label>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  <label class="text-xs text-gray-500">Date Service</label>
                </div>
                <div class="pt-5">
                  <button
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
  <!-- <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl">
        Your Orders Details from order id :
        {{ this.$store.state.dataOrderDetail.id }}
      </h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">Service Name</th>
            <th class="text-left p-3 px-5">Price</th>
            <th class="text-left p-3 px-5">Create Order</th>
            <th class="text-left p-3 px-5">Action</th>
          </tr>
          <DetailItem
            v-for="order in this.$store.state.dataOrderDetail.OrderDetails"
            :key="order.id"
            :order="order"
          ></DetailItem>
        </tbody>
      </table>
    </div>
  </div> -->
</template>

<script>
import DetailItem from "../components/DetailItems.vue";
export default {
  name: "OrderDetails",
  created() {
    console.log(this.$route.params);
    this.$store.dispatch("fetchOrdersDetail", this.$route.params.id);
  },
  components: {
    DetailItem,
  },
};
</script>

<style></style>
