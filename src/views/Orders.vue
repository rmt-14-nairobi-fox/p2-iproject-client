<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="text-center text-xl">
      <h1 class="text-5xl">Your Orders Lists</h1>
      <p v-if="this.$store.state.dataOrder.length <= 0" class="pt-5">
        You don't have an order, select some service now!
      </p>
    </div>
    <div
      v-if="this.$store.state.dataOrder.length > 0"
      class="px-3 py-4 flex justify-center"
    >
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
    <p class="text-center pt-0">
      Notes: Order lebih dari 24 jam tidak dibayarkan akan otomatis tercancel
    </p>
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
