<template>
  <div>
    <h1>Payment page</h1>
  </div>
</template>

<script>
export default {
  name: "Payment",

  created() {
    window.snap.pay(this.$store.state.tokenTransaction);
  },
};
</script>

<style></style>
