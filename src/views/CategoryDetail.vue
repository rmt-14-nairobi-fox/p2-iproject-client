<template>
  <div class="p-3 row">
        <ButtonSearch></ButtonSearch>
        <CategoryDetailCard v-for="product in products" :key="product.id" :product="product"></CategoryDetailCard>
    </div>
</template>

<script>
import ButtonSearch from "../components/ButtonSearch.vue"
import CategoryDetailCard from "../components/CategoryDetailCard.vue"
export default {
    name:"CategoryDetail",
    components:{
        CategoryDetailCard,
        ButtonSearch
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    }
}
</script>

<style>

</style>