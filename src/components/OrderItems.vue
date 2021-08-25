<template>
  <tr class="border-b hover:bg-orange-100 bg-gray-100">
    <td class="p-3 px-5">{{ order.id }}</td>
    <td class="p-3 px-5">{{ order.totalPrice }}</td>
    <td class="p-3 px-5">{{ order.isPayment }}</td>
    <td class="p-3 flex">
      <button
        type="button"
        class="
          mr-3
          text-sm
          bg-green-500
          hover:bg-green-700
          text-white
          py-1
          px-2
          rounded
          focus:outline-none focus:shadow-outline
        "
      >
        Pay</button
      ><button
        type="button"
        class="
          mr-3
          text-sm
          bg-red-500
          hover:bg-red-700
          text-white
          py-1
          px-2
          rounded
          focus:outline-none focus:shadow-outline
        "
      >
        Delete
      </button>
      <button
        @click.prevent="detailOrder(order.id)"
        type="button"
        class="
          text-sm
          bg-yellow-500
          hover:bg-yellow-700
          text-white
          py-1
          px-2
          rounded
          focus:outline-none focus:shadow-outline
        "
      >
        Details
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "OrderItem",
  props: ["order"],
  methods: {
    detailOrder(payload) {
      this.$store.dispatch("fetchOrdersDetail", payload);
    },
  },
};
</script>

<style></style>
