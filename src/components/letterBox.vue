<template>
  <div class="flex m-3">
    <a
      @click.prevent="printLetter(letter)"
      class="flex justify-center cursor-pointer shadow-lg text-4xl text-green-900 font-semibold w-12 pb-1 bg-white rounded-lg"
      >{{ letter }}</a
    >
  </div>
</template>

<script>
export default {
  name: "LetterBox",
  props: ["letter"],
  methods: {
    printLetter(letter) {
      this.$emit("printLetter", letter);
    }
  }
};
</script>

<style></style>
