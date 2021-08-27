<template>
    <div class="flex flex-col justify-between min-h-screen">
        <cus-navbar></cus-navbar>
        <div class="flex pt-28 container mx-auto flex-col ">
            <div 
            style="backgroundColor: var(--darkBlue)"
                class="
                    flex
                    justify-between
                    px-8
                    border-2 
                    text-gray-50
                    border-blue-400 
                    shadow-lg 
                    rounded-2xl 
                    w-full 
                    mx-auto 
                    py-4">
                <div class="my-auto text-left text-2xl space-y-2">
                    <div>{{weather.name}}</div>
                    <div>{{weather.region}}</div>
                    <div>{{weather.country}}</div>
                </div>
                <div class="my-auto flex space-x-8">
                    <img style="width: 150px" :src="weather.icon" alt="err">
                    <div class="my-auto text-8xl">{{weather.tempC}} C</div>
                </div>
                <div class="my-auto text-3xl space-y-2">
                    <div class="text-2xl">condition:</div>
                    <div>{{weather.condition}}</div>
                </div>
            </div>

            <div class="mt-16 flex mx-auto">
                <img class="rounded-2xl shadow-lg" 
                    :src="farmDetail.imgUrl" 
                    alt="nopicture">

                <div class="ml-24 text-left space-y-4 text-lg">
                    <div class="text-4xl font-black">{{farmDetail.name}}</div>
                    <div>{{farmDetail.description}}</div>
                    <div>Location: {{farmDetail.location}}</div>
                    <div>Area: {{farmDetail.area}} ha</div>
                    <div>Type: {{farmDetail.Type.name}}</div>
                </div>
            </div>
            
            <form @submit.prevent="addReq" class="flex my-16 mx-auto" action="">
                <input v-model="request" style="width: 500px" class=" rounded-xl shadow-xl border-2 border-blue-200 focus:outline-none" type="text" placeholder="       e.g. delete this farm">

                <button type="submit" class="bg-blue-400 shadow-xl ml-8 p-4 hover:bg-blue-500 rounded-xl font-black text-xl">Add Request to Admin</button>
            </form>

        </div>

        <HFooter></HFooter>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState} from 'vuex'
import HFooter from 'vue-hacktiv8-footer'
import CusNavbar from "../../components/customer/CusNavbar.vue"

export default {
    name: 'DetailFarm',
    components: { 
        CusNavbar,
        HFooter,
    },
    data() {
        return {
            request : ''
        }
    },
    computed: {
        ...mapState(['farmDetail', 'weather'])
    },
    methods: {
        ...mapActions(['getUser', 'getOneFarm', 'getWeather', 'createReq']),
        ...mapMutations({
            fillCurPage: 'FILL_CUR_PAGE'
        }),
        async addReq(){
            await this.createReq({
                FarmId: this.farmDetail.id,
                farmName: this.farmDetail.name,
                request: this.request
            })
            this.fillCurPage('listReq')
            this.$router.push({ name: 'CusHome'})
        }
    },
    async created() {
        const farmId = window.location.pathname.split('/').slice('-1')[0]

        await this.getUser()
        await this.getOneFarm(farmId)
        await this.getWeather(this.farmDetail.location)
    }
}
</script>

<style>

</style>