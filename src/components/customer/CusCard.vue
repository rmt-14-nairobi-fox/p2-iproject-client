<template>
    <div class="grid gap-16 mb-8 md:grid-cols-1 lg:grid-cols-2">

    <router-link
        v-for="item in farmData"
        :key="'card'+item.id"
        :to="'/farm/'+item.id"
        style="height: 200px"
        class="
            pointer
            flex 
            items-center  
            bg-white 
            rounded-lg 
            shadow-2xl 
            dark:bg-gray-800">
            
        <img 
            alt="mountain" 
            class="h-full rounded-md" 
            :src="item.imgUrl" />

            <div class="h-full w-full flex flex-col p-5 justify-between">
                <h4 class="text-xl font-semibold mb-2">
                    {{ item.name }}
                </h4>

                <p class="text-gray-800 mt-2">
                    {{ item.description }}
                </p>

                <div class="flex justify-between mt-5 ">
                    <p class="ml-3">{{ item.area }} ha</p>
                    

                    <p class="ml-3">{{ item.location }}</p>
                </div>
            </div>
        </router-link>
        
        <router-link
        to="/farm"
        style="height: 200px"
        class="
            pointer
            flex 
            items-center  
            bg-white 
            rounded-lg 
            shadow-2xl 
            dark:bg-gray-800">
            
        

            <div class="h-full w-full flex text-9xl">
                <span class="m-auto">+</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'CusCard',
    computed: {
        ...mapState(['farmData'])
    },
}
</script>

<style>

</style>