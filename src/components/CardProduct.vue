<template>
  <div
    class="
      max-w-xs
      mx-auto
      overflow-hidden
      bg-red-200
      rounded-lg
      shadow-lg
      dark:bg-gray-800
    "
  >
    <img
      class="object-cover w-full h-56"
      :src="prod.User.imgUser"
      alt="avatar"
    />

    <div class="py-5 text-center">
      <p class="text-2xl font-bold">{{ prod.name }}</p>
      <span class="text-sm text-gray-700 dark:text-gray-200">{{
        prod.detail
      }}</span>
    </div>
    <div class="flex items-center justify-center mx-auto">
      <button
        @click.prevent="checkoutHandler(prod)"
        class="
          flex
          items-center
          px-2
          py-2
          font-medium
          tracking-wide
          text-white
          capitalize
          transition-colors
          duration-200
          transform
          bg-green-600
          rounded-md
          dark:bg-gray-800
          hover:bg-green-400
          dark:hover:bg-gray-700
          focus:outline-none focus:bg-blue-500
          dark:focus:bg-gray-700
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <span class="mx-1">Take Service</span>
      </button>
      <button
        class="
          flex
          items-center
          px-2
          py-2
          font-medium
          tracking-wide
          text-white
          capitalize
          transition-colors
          duration-200
          transform
          bg-yellow-500
          rounded-md
          dark:bg-gray-800
          hover:bg-yellow-300
          dark:hover:bg-gray-700
          focus:outline-none focus:bg-blue-500
          dark:focus:bg-gray-700
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span class="mx-1">Chat Provider</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProd",
  props: ["prod"],
  methods: {
    checkoutHandler(product) {
      this.$store.commit("COMMIT_ADD_CART", product);
      this.$toast.open({
        message: "Succes add service to cart!",
        type: "success",
        position: "top",
      });
    },
  },
};
</script>

<style></style>
