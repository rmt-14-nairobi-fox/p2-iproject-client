<template>
  <div class="home">
    <SearchBar/>
    <div style="margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;">
        <!-- Search Bar -->
        <!-- Card -->
        <Card v-for="fish in fetchFishes" :key="fish.id" :fishes="fish"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";
import Card from "../components/Card.vue"

export default {
  name: 'Home',
  components: {
    SearchBar,
    Card
  },
  created() {
    this.$store.dispatch("getFishes")
  },
  computed: {
    fetchFishes() {
      return this.$store.state.fishes
    }
  }
}
</script>
