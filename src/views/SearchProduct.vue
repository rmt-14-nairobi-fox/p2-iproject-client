<template>
  <div class="p-3 row">
        <ButtonSearch></ButtonSearch>  
        <SearchCard v-for="search in search" :key="search.id" :search="search"></SearchCard>
    </div>
</template>

<script>
import ButtonSearch from "../components/ButtonSearch.vue"
import SearchCard from "../components/SearchCard.vue"
export default {
    name:"SearchProduct",
    components:{
        SearchCard,
        ButtonSearch
    },
    computed:{
        search(){
            return this.$store.state.search
        }
    }
}
</script>

<style>

</style>