<template>
  <div
    class="
      bg-sidebar
      p-8
      rounded-2xl
      max-w-6xl
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
    @click="detailClick(accommodation.id)"
  >
    <div class="flex max-h-72">
      <div class="w-6/12 text-gray-800 bg-home-main p-16 flex items-center">
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
      <div class="w-6/12 relative">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80"
          alt="Banner Desktop"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccommodationsCard",
  props: ["accommodation"],
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
  },
};
</script>

<style></style>
