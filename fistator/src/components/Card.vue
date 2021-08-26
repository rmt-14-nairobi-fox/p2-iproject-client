<template>
  <div style="display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 100px;">
        <div class="card" style="width: 18rem; margin: 20px;">
            <img @click.prevent="toFish(fishes.name)" :src="fishes.imageUrl" class="card-img-top" style="cursor: pointer; width: auto; height: 90px;" alt="">
            <div class="card-body">
                <h5 class="card-title">{{fishes.name}}</h5>
                <p class="card-text">Click to expand</p>
                <a href="" class="btn btn-primary" @click.prevent="addFish(fishes.name)">Add to Fish-to-Catch</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    methods: {
        toFish(name) {
            this.$router.push(`/fish/${name}`)
        },
        addFish(name) {
            const formattedName = name.split(" ").join("-").toLowerCase()
            this.$store.dispatch("addFish", formattedName)
        }
    },
    props: ["fishes"]
}
</script>

<style>

</style>