<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin-top: 50px;">
        <h4 style="margin-bottom: 50px; text-align: center;">Feel free to choose your fish!</h4>
        <div style="display: flex; height: 100px">
            <div class="input-group">
                <div class="form-outline" style="width: 350px;">
                    <!-- <input type="text" v-on:keyup.enter="toFish(fishName)" v-model="fishName" autocomplete="off" id="form1" class="form-control" placeholder="Search here (ex: Tuna, Red Snapper, etc)"> -->
                    <v-app>
                        <v-autocomplete
                            v-model="fishName"
                            :items="showFishes"
                            dense
                            filled
                            label="Click enter after input has been filled"
                            v-on:keyup.enter="toFish(fishName)"
                        ></v-autocomplete>
                    </v-app>
                </div>
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
        }
    },
    created() {
        this.$store.dispatch("getFishes")
        },
    computed: {
        fetchFishes() {
            return this.$store.state.fishes
        },
        showFishes() {
            return this.$store.state.fishes.map(el => {return el.name.split(" ").join("-").toLowerCase()})
        }
    },
    methods: {
        toFish(name) {
            const formattedName = name.split(" ").join("-").toLowerCase()
            this.$router.push(`/fish/${formattedName}`)
        },
    }
}
</script>

<style>

</style>