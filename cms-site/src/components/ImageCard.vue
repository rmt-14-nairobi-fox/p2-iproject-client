<template>
  <tr>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex items-center">
        <div class="">
          <img
            style="height: 200px"
            class="w-full h-full"
            :src="image.imageUrl"
            alt=""
          />
        </div>
      </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">{{ image.description }}</p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <button
        class="
          text-xl text-center
          bg-btn-in-main-danger
          py-2
          px-4
          rounded-lg
          text-white
          mr-auto
        "
        @click="deleteHandler(image.id)"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ImageCard",
  props: ["image"],
  created() {
    this.$store.dispatch("getAllImages", +this.$route.params.idAccom);
  },
  methods: {
    deleteHandler(payload) {
      const data = {
        accomId: +this.$route.params.idAccom,
        imageId: +payload,
      };

      this.$store.dispatch("deleteImageFunction", data);
    },
  },
};
</script>

<style></style>
