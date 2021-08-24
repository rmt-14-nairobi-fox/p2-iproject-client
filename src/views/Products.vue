<template>
  <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
    <h2
      class="
        text-xl
        font-medium
        text-gray-800
        capitalize
        dark:text-white
        md:text-2xl
      "
    >
      Para Provider kami
    </h2>
    <div class="flex items-center justify-center">
      <CardProd
        v-for="prod in this.$store.state.productData"
        :key="prod.id"
        :prod="prod"
      ></CardProd>
    </div>
  </section>
</template>

<script>
import CardProd from "../components/CardProduct.vue";
export default {
  name: "Products",
  created() {
    this.$store.dispatch("fetchProvider", this.$route.params.id);
  },
  components: {
    CardProd,
  },
};
</script>

<style></style>
