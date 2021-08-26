<template>
  <div
    class="max-h-full"
    style="
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <img
      src="https://img.freepik.com/free-vector/credit-card-landing-page-payment-concept_23-2148298750.jpg?size=338&ext=jpg"
      alt=""
    />
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
