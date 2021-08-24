<template>
  <div
    class="
      max-w-xs
      mx-auto
      overflow-hidden
      bg-red-500
      rounded-lg
      shadow-lg
      dark:bg-gray-800
    "
  >
    <div class="px-4 py-2">
      <h1 class="text-3xl font-bold text-white uppercase dark:text-white">
        {{ service.name }}
      </h1>
      <p class="mt-1 text-sm text-white dark:text-white-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
        quidem sequi illum facere recusandae voluptatibus
      </p>
    </div>

    <img
      class="object-cover w-full h-48 mt-2"
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
      alt="NIKE AIR"
    />

    <div class="flex items-center px-4 py-2 bg-gray-900">
      <button
        @click.prevent="seeProvider(service)"
        class="
          px-2
          py-1
          text-xs
          font-semibold
          text-gray-900
          uppercase
          transition-colors
          duration-200
          transform
          bg-white
          rounded
          hover:bg-gray-200
          focus:bg-gray-400 focus:outline-none
        "
        type="button"
      >
        See Providers
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardService",
  props: ["service"],
  methods: {
    seeProvider(service) {
      this.$router.push("/providers");
      this.$store.commit("SEE_PROVIDER", service);
    },
  },
};
</script>

<style></style>
