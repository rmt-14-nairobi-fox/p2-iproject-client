<template>
  <tr>
    <td class="hidden pb-4 md:table-cell">
      <a href="#">
        <img :src="item.User.imgUser" class="w-20 rounded" alt="Thumbnail" />
      </a>
    </td>
    <td>
      <a href="#">
        <p class="mb-2 md:ml-4">{{ item.name }}</p>
        <form action="" method="POST">
          <button type="submit" class="text-gray-700 md:ml-4">
            <small>(Remove item)</small>
          </button>
        </form>
      </a>
    </td>
    <td class="justify-center md:justify-end md:flex mt-6">
      <div class="w-20 h-10">
        <div class="relative flex flex-row w-full h-8">1x</div>
      </div>
    </td>
    <td class="hidden text-right md:table-cell">
      <span class="text-sm lg:text-base font-medium"> {{ item.price }} </span>
    </td>
    <td class="text-right">
      <span class="text-sm lg:text-base font-medium">
        Rp. {{ item.price }}
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableCart",
  props: ["item"],
};
</script>

<style></style>
