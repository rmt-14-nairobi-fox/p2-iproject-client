<template>
  <tr class="border-b hover:bg-orange-100 bg-gray-100">
    <td class="p-3 px-5">{{ order.id }}</td>
    <td class="p-3 px-5">Rp. {{ order.totalPrice }}</td>
    <td class="p-3 px-5">{{ order.isPayment }}</td>
    <td class="p-3 flex">
      <div v-if="order.isPayment === 'PENDING'">
        <button
          @click.prevent="cancelTransaction(order.id)"
          type="button"
          class="
            mr-3
            text-sm
            bg-red-500
            hover:bg-red-700
            text-white
            py-1
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
        >
          CANCEL
        </button>
        <button
          @click.prevent="detailOrder(order.id)"
          type="button"
          class="
            mr-3
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
          DETAILS
        </button>
        <button
          @click.prevent="checkoutHandler(order.tokenPayment)"
          type="button"
          class="
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
          PAY
        </button>
      </div>
      <div v-if="order.isPayment === 'PAID'">
        <button
          class="
            mr-3
            text-sm
            bg-blue-500
            text-white
            py-1
            px-7
            rounded
            focus:outline-none focus:shadow-outline
          "
        >
          PAID
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
          DETAILS
        </button>
      </div>
      <div v-if="order.isPayment === 'CANCELED'">
        <button
          class="
            mr-3
            text-sm
            bg-gray-500
            text-white
            py-1
            px-2
            rounded
            focus:outline-none focus:shadow-outline
          "
        >
          CANCELED
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
          DETAILS
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "OrderItem",
  props: ["order"],
  created() {
    // this.$store.dispatch("currencyAPI", 0);
  },
  methods: {
    detailOrder(payload) {
      this.$store.dispatch("fetchOrdersDetail", payload);
    },
    checkoutHandler(token) {
      this.$store.commit("COMMIT_TOKEN_TRANSACTION", token);
    },
    cancelTransaction(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("goCancelOrder", id);
        }
      });
    },
  },
};
</script>

<style></style>
