<template>
  <div class="flex justify-between items-center mt-6 pt-6 border-t">
    <div class="flex items-center">
      <img :src="item.User.imgUser" width="80" />

      <div class="flex flex-col ml-3">
        <span class="text-md font-medium">{{ item.name }}</span>
        <span class="text-xs font-light text-gray-400">{{
          item.User.username
        }}</span>
        <span class="text-xs font-light text-gray-400"> {{ item.detail }}</span>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="pr-10">
        <span class="text-xs font-medium">RP.{{ item.price }}</span>
      </div>
      <div>
        <a
          @click.prevent="deleteCartItem(item.id)"
          href=""
          class="
            px-5
            py-2
            text-gray-100
            transition-colors
            duration-200
            transform
            bg-red-500
            rounded-md
            hover:bg-red-800
          "
          >Cancel</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableCart",
  props: ["item"],
  methods: {
    deleteCartItem(id) {
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
          this.$store.commit("DELETE_CART_ITEM", id);
          this.$emit("sumTotalPrice");
        }
      });
    },
  },
};
</script>

<style></style>
