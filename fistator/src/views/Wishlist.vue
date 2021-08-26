<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <div style="text-align: center; margin-top: 20px;">  
            <h1>Fish-to-Catch List</h1>
        <!-- Buat action, bikin card baru -->
        </div>
        <p v-show="fishStatus === 'good'" class="card-text"><button type="button" class="btn btn-success">You're good to go!</button></p>
        <p v-show="fishStatus === 'warning'" class="card-text"><button type="button" class="btn btn-warning">Be careful of the fish population</button></p>
        <p v-show="fishStatus === 'danger'" class="card-text"><button type="button" class="btn btn-danger">Not recommended to fish</button></p>
        <p v-show="fishStatus === 'unknown'" class="card-text"><button type="button" class="btn btn-secondary">Need more information</button></p>
        <div v-if="wishlists.lenght === 0" style="display: flex; justify-content: center; margin-top: 50px">
            <div class="spinner-border" role="status">
            <span class="sr-only"></span>
            </div>
        </div>
        <div style="display: flex; flex-wrap: wrap; flex-direction: row; align-items: center; justify-content: center;">
            <div v-for="fish in wishlists" :key="fish.id" class="card" style="width: 18rem; margin: 20px;">
                <img @click.prevent="toFish(fish.name)" :src="fish.imageUrl" class="card-img-top" style="cursor: pointer; width: auto; height: 120px;" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{fish.name}}</h5>
                    <p class="card-text">Click to expand</p>
                    <a href="" class="btn btn-danger" @click.prevent="deleteFish(fish.name)">Delete</a>
                    <!-- Kalo fish.fishingRate === Good keitung 1, nanti ditotalin. Good > Bad, BUtton (Youre good to go) dan kebalikannya 1. Youre good to go, 2. Fish with care, 3. Danger status -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Card from "../components/Card.vue"

export default {
    name: "Wishlist",
    data() {
        return {
            good: 0,
            careful: 0,
            danger: 0
        }
    },
    components: {
    },
    created() {
        this.$store.dispatch("getWishlist")
    },
    computed: {
        wishlists() {
            return this.$store.state.wishlists
        },
        fishStatus() {
            // BUat 3 variabel
            // Filter masing2
            // Cari .length
            // Compare 3 kali
            // "Good" => Youre good to go
            let goodStatus = []
            let warningStatus = []
            let dangerStatus = []
            this.$store.state.wishlists.forEach(status => {
                if (status.fishingRate === "At recommended level.") {
                    goodStatus.push(status.fishingRate)
                } else if (status.fishingRate === "Not subject to overfishing.") {
                    goodStatus.push(status.fishingRate)
                } else if (status.fishingRate === "Reduced to end overfishing.") {
                    dangerStatus.push(status.fishingRate)
                } else {
                    warningStatus.push(status.fishingRate)
                }
            })
            if (goodStatus.length > warningStatus.length && goodStatus.length > dangerStatus.length) {
                return "good"
            } else if (warningStatus.length > goodStatus.length && warningStatus.length > dangerStatus.length) {
                return "warning"
            } else if (dangerStatus.length > goodStatus.length && dangerStatus.length > warningStatus.length) {
                return "danger"
            } else if (goodStatus.length === warningStatus.length || goodStatus.length === dangerStatus.length || warningStatus.length === dangerStatus.length) {
                return "unknown"
            } else {
                return "danger"
            }
        }
    },
    methods: {
        deleteFish(name) {
            const formattedName = name.split(" ").join("-").toLowerCase()
            this.$store.dispatch("deleteFish", formattedName)
        },
        toFish(name) {
            this.$router.push(`/fish/${name}`)
        }
    }
}
</script>

<style>

</style>