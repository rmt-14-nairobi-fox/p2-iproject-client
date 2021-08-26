<template>
    <div class="p-3 row">
        <CategoryCard v-for="category in categories" :key="category.id" :category="category"></CategoryCard>
    </div>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue"
export default {
    name:"Category",
    components: {
        CategoryCard,
    },
    created(){
        this.$store.dispatch("fetchCategories")
    },
    computed:{
        categories(){
            return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>