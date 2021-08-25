<template>
  <div class="flex justify-between items-center mt-6 pt-6 border-t">
    <div class="flex items-center">
      <!-- <img :src="item.User.imgUser" width="80" /> -->
      <div class="flex flex-col ml-3">
        <span class="text-md font-medium">{{ order.Product.name }}</span>
        <span class="text-xs font-light text-gray-400">{{
          order.Product.detail
        }}</span>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <!-- <div class="pr-10 flex">
        <span class="text-xs">Date </span>
        <input
          type="date"
          class="
            focus:outline-none
            w-full
            h-6
            bg-white
            text-black
            placeholder-gray-500
            text-xs
            py-2
          "
        />
      </div> -->
      <div class="pr-8">
        <span class="text-xs font-medium">RP.{{ order.Product.price }}</span>
      </div>
      <div><i class="fa fa-close text-xs font-medium"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: ["order"],
};
</script>

<style></style>
