<template>
  <div class="favorite">
      <h2>Your Favorite Product</h2>
      <div class="row p-3">
        <FavoriteCard class="col" v-for="favorite in favorites" :key="favorite.id" :favorite="favorite"></FavoriteCard>
      </div>
  </div>
</template>

<script>
import FavoriteCard from "../components/FavoriteCard.vue"
export default {
    name:"Favorite",
    computed: {
      favorites(){
        return this.$store.state.favorites
      }
    },
    created (){
      this.$store.dispatch('fetchFavorites')
    },
    components:{
      FavoriteCard
    }
}
</script>

<style>

</style>