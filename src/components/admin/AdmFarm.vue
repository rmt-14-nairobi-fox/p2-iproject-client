<template>
    <div class="w-full">
        <div>
            <h1 class="text-4xl">Farms</h1>
            <p class="text-gray-500 mt-2">list of farm that customer make it</p>
        </div>

        <div class="flex flex-col mt-8 overflow-x-auto ">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="
                        shadow
                        overflow-hidden
                        border-b border-gray-200
                        sm:rounded-lg
                    ">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead style="background-color: var(--darkBlue);"
                            class="text-blue-100 font-black">
                            <tr>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    No
                                </th>
                        
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Name
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Picture
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Type
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Location
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Surface Area
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-left 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Customer Email
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(item, index) in farmData" :key="'admFarm'+item.id">
                                <td class="px-6 py-4 text-sm text-left  text-gray-600">
                                    {{index + 1}}
                                </td>

                                <td class="px-6 py-4text-sm font-medium text-gray-600">
                                    {{item.name}}
                                </td>

                                <td class="px-6 py-4 text-gray-500 text-sm">
                                    <img :src="item.imgUrl" width="120px" alt="no picture">
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{item.Type.name}}
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{item.location}}
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{item.area}} ha
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{item.User.email}}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'AdmFarm',
    computed: {
        ...mapState(['farmData'])
    }
}
</script>

<style>

</style>