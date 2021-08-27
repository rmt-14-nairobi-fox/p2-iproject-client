<template>
  <div class="home">
    <!-- <Carousel /> -->
    <Navbar />
    <Card />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Card from '../components/Card.vue';
export default {
  name: "Home",
  components: {
    Navbar,
    Card
  }
};
</script>
