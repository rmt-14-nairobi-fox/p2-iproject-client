<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
      <div v-show="fish === undefined" style="display: flex; justify-content: center; margin-top: 50px">
            <div class="spinner-border" role="status">
            <span class="sr-only"></span>
            </div>
        </div>
        <div class="card" style="width: 50rem; margin: 20px;">
            <img :src="fish.imageUrl" class="card-img-top" style="" alt="">
        </div>
        <div class="card-body" style="display: flex; flex-direction: column; align-items: center;">
            <h1 class="card-title" style="margin-bottom: 50px;">{{fish.name}}</h1>
            <h3>Population</h3>
            <p class="card-text">{{fish.population}}</p>
            <p v-show="fish.population === null" class="card-text">Not Available</p>
            <h3>Status</h3>
            <p class="card-text">{{fish.status}}</p>
            <p v-show="fish.status === null" class="card-text">Not Available</p>
            <h3>Availability</h3>
            <p class="card-text">{{fish.availability}}</p>
            <p v-show="fish.availability === null" class="card-text">Not Available</p>
            <h3>Fishing Rate</h3>
            <!-- <p class="card-text">{{fish.fishingRate}}</p> -->
            <p v-if="fish.fishingRate === 'At recommended level.'" class="card-text"><button type="button" class="btn btn-success">Good</button></p>
            <p v-else-if="fish.fishingRate === 'Not subject to overfishing.'" class="card-text"><button type="button" class="btn btn-success">Good</button></p>
            <p v-else-if="fish.fishingRate === 'Reduced to end overfishing.'" class="card-text"><button type="button" class="btn btn-danger">Danger</button></p>
            <p v-else class="card-text"><button type="button" class="btn btn-warning">Warning</button></p>
            <p v-show="fish.fishingRate === null" class="card-text">Not Available</p>
            <a href="" class="btn btn-primary" @click.prevent="addFish(fish.name)" style="margin-bottom: 20px; margin-top: 100px;">Add to Fish-to-Catch</a>
            <a href="" class="btn btn-secondary" @click.prevent="toHome">Back to Home</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "Fish",
    created() {
        console.log(this.$route.params.fishName)
        const fishName = this.$route.params.fishName.split(" ").join("-")
        this.$store.dispatch("getFishByName", fishName)
    },
    computed: {
        fish() {
            return this.$store.state.selectedFish[0]
        }
    },
    methods: {
        addFish(name) {
            const formattedName = name.split(" ").join("-").toLowerCase()
            this.$store.dispatch("addFish", formattedName)
        },
        toHome() {
            this.$router.push("/")
        }
    }
}
</script>

<style>
p {
    margin-bottom: 20px;
    text-align: center;
}
</style>