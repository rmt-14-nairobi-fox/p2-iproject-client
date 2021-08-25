<template>
    <div>
        <div style="text-align: center; margin-top: 20px;">  
            <h1>Fish-to-Catch List</h1>
        <!-- Buat action, bikin card baru -->
        </div>
        <div v-show="wishlists.length === 0" style="display: flex; justify-content: center; margin-top: 50px">
            <div class="spinner-border" role="status">
            <span class="sr-only"></span>
            </div>
        </div>
        <div style="display: flex; flex-wrap: wrap; flex-direction: row; align-items: center; justify-content: center;">
            <div v-for="fish in wishlists" :key="fish.id" class="card" style="width: 18rem; margin: 20px;">
                <img :src="fish.imageUrl" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{fish.name}}</h5>
                    <p class="card-text">Click to expand</p>
                    <a href="" class="btn btn-danger" @click.prevent="deleteFish(fish.name)">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Card from "../components/Card.vue"

export default {
    name: "Wishlist",
    components: {
    },
    created() {
        this.$store.dispatch("getWishlist")
    },
    computed: {
        wishlists() {
            return this.$store.state.wishlists
        }
    },
    methods: {
        deleteFish(name) {
            const formattedName = name.split(" ").join("-").toLowerCase()
            this.$store.dispatch("deleteFish", formattedName)
        }
    }
}
</script>

<style>

</style>