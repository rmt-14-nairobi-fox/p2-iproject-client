<template>
  <div class="flex justify-between mb-2">
    <p class="text-medium text-blue-900">{{ user.username }}</p>
    <a
      class="bg-blue-800 rounded-lg px-2 text-white cursor-pointer"
      @click.prevent="toChat"
      >Chat</a
    >
  </div>
</template>

<script>
export default {
  name: "UserOnline",
  props: ["user"],
  methods: {
    toChat() {
      this.$emit("toChat", true);
    }
  }
};
</script>

<style></style>
