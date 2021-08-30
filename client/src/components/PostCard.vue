<template>
  <div class="bg-white rounded-lg shadow-2xl">
    <img
      :src="
        post.imageUrl === 'test add post 1'
          ? 'https://images.unsplash.com/photo-1570263849386-fafb59c56a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
          : post.imageUrl
      "
      alt="boy with camera"
      class="rounded-t-xl h-50 w-full object-cover"
    />

    <header class="bg-gray-100 rounded-t-lg font-bold text-2xl py-5 px-8">
      name: {{ post.name }}
    </header>

    <!-- content -->
    <div class="py-5 px-8">
      <p class="text-blue-500 mb-2">Category: {{ post.type }}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        deleniti dolores omnis similique repellendus quam, consequatur optio
        consequuntur sed.
      </p>

      <!-- button -->
      <div class="flex flex-row justify-between text-center">
        <button
          class="
            mt-4
            rounded-lg
            px-4
            py-2
            bg-green-500
            text-blue-50
            shadow
            hover:shadow-xl
            duration-300
          "
        >
          Adopt Me
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
};
</script>

<style></style>
