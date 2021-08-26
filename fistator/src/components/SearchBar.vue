<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin-top: 50px;">
        <h4 style="margin-bottom: 50px; text-align: center;">Feel free to choose your fish!</h4>
        <div style="display: flex">
            <div class="input-group">
                <div class="form-outline" style="width: 350px;">
                    <input type="text" v-model="fishName" autocomplete="off" id="form1" class="form-control" placeholder="Search here (ex: Tuna, Red Snapper, etc)" >
                </div>
                <button @click.prevent="toFish(fishName)" type="button" class="btn btn-primary" style="margin-bottom: 50px;">
                    <i class="fas fa-search">Submit</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            fishName: "",
            fishes: [],
            filteredFishes: []
        }
    },
    created() {
        this.$store.dispatch("getFishes")
        this.fishes = this.$store.state.fishes.map(el => {return el.name.split(" ").join("-").toLowerCase()})
        },
    computed: {
        fetchFishes() {
            return this.$store.state.fishes
        },
    },
    methods: {
        toFish(name) {
            const formattedName = name.split(" ").join("-").toLowerCase()
            this.$router.push(`/fish/${formattedName}`)
        },
        // filterFishes() {
        //     this.filteredFishes = this.fishes.filter(el => {
        //         return el.toLowerCase().startsWith(el.toLowerCase())
        //     })
        // }
    }
}
</script>

<style>

</style>