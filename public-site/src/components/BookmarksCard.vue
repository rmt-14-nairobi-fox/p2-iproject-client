<template>
  <div
    class="
      bg-sidebar
      p-8
      rounded-2xl
      w-full
      mx-auto
      mb-7
      hover:shadow-2xl
      transition
      duration-500
      ease-in-out
      transform
      hover:-translate-y-1 hover:scale-105
      cursor-pointer
    "
  >
    <div @click="detailClick(accommodation.id)" class="flex max-h-72">
      <div class="w-full text-gray-800 bg-home-main p-8 flex items-center">
        <div>
          <p class="text-xl mb-5">
            <span>Title:&nbsp;</span>
            {{ accommodation.title }}
          </p>
          <p class="text-xl mb-5">
            <span>Type:&nbsp;</span>
            {{ accommodation.type }}
          </p>
          <p class="text-xl mb-5 font-bold">
            <span class="font-normal">Price:&nbsp;</span>

            Rp. {{ accommodation.price }} /month
          </p>
          <h1 class="text-lg">Address</h1>
          <div class="flex">
            <div class="mr-8">
              <p class="text-xl capitalize">
                <span>Street:&nbsp;</span>
                {{ accommodation.address }}
              </p>
            </div>
            <div class="mr-8">
              <p class="text-xl capitalize">
                <span>City:&nbsp;</span>
                {{ accommodation.city }}
              </p>
            </div>
            <div class="mr-8">
              <p class="text-xl capitalize">
                <span>Zip code:&nbsp;</span>
                {{ accommodation.zipCode }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="
        mt-4
        text-2xl text-center
        bg-btn-in-main-danger
        py-2
        px-5
        rounded-lg
        text-white
        mr-2
      "
      @click="unsaveHandler(bookmark.id)"
    >
      Remove
    </button>
  </div>
</template>

<script>
export default {
  name: "AccommodationsCard",
  props: ["accommodation", "bookmark"],
  methods: {
    detailClick(payload) {
      this.$router
        .push({
          name: "AccommodationDetails",
          params: {
            id: +payload,
          },
        })
        .catch(() => {});
    },
    unsaveHandler(payload) {
      //   console.log(payload);
      this.$store.dispatch("unsaveBookmarkFunction", payload);
    },
  },
};
</script>

<style></style>
