<template>
  <section>
    <!-- <h1 class="text-6xl font-bold text-white">Home Screen</h1> -->
  </section>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.$router.push('/coins')
  }
}
</script>
