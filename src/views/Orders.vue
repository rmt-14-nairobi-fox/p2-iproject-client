<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl">Your Orders</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">Order Id</th>
            <th class="text-left p-3 px-5">Total Price</th>
            <th class="text-left p-3 px-5">Status Payment</th>
            <th class="text-left p-3 px-5">Action</th>
          </tr>
          <OrderItem
            v-for="order in this.$store.state.dataOrder"
            :key="order.id"
            :order="order"
          ></OrderItem>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import OrderItem from "../components/OrderItems.vue";
export default {
  name: "Orders",
  created() {

    this.$store.dispatch("fetchOrders");
  },
  components: {
    OrderItem,
  },
};
</script>

<style></style>
