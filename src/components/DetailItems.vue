<template>
  <div class="flex justify-between items-center mt-6 pt-6 border-t">
    <div class="flex items-center">
      <img :src="order.Product.User.imgUser" width="80" />
      <div class="flex flex-col ml-3">
        <span class="text-md font-medium">{{ order.Product.name }}</span>
        <span class="text-xs font-light text-gray-400">{{
          order.Product.detail
        }}</span>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="pr-8 mr-20">
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
