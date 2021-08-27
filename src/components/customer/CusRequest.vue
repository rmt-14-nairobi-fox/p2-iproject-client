<template>
    <div class="w-full">
        <div>
            <h1 class="text-4xl">Your Request</h1>
            <p class="text-gray-500 mt-2">list of your request</p>
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
                        <thead 
                            style="background-color: var(--darkBlue;"
                            class="text-blue-100 font-black"
                        >
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
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Requested By
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Farm Name
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Request
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3 
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    Status
                                </th>
                                <th scope="col" class="
                                    px-6
                                    py-3
                                    text-xs
                                    uppercase
                                    tracking-wider
                                ">
                                    admin
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(item, index) in reqData" :key="'cusReq'+item.id">
                                <td class="px-6 py-4 text-sm text-left  text-gray-500">
                                    {{index+1}}
                                </td>

                                <td class="px-6 py-4text-sm text-gray-600">
                                    {{ item.user }}
                                </td>

                                <td class="px-6 py-4 text-sm font-medium text-gray-600">
                                    {{ item.farmName }}
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{ item.request }}
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    <span v-if="item.status === 'sending'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-black">
                                        {{ item.status }}
                                    </span>
                                    <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {{ item.status }}
                                    </span>
                                    
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{ item.admin }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <button @click="backHome" class="mt-16 bg-red-400 p-2 shadow-lg rounded-md text-white font-black">Back To Home</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'CusRequest',
    computed: {
        ...mapState(['reqData'])
    },
    methods: {
        ...mapMutations({
            fillCurPage: 'FILL_CUR_PAGE'
        }),
        backHome() {
            this.fillCurPage('listCard')
        }
    }
}
</script>

<style>

</style>