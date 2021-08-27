<template>
    <div class="space-y-8 p">
        <div class="text-left p-8 bg-white shadow-lg rounded-lg">
            <div>from: {{reqDetail.user}}</div>
            <div>request: {{reqDetail.request}} </div>
        </div>
        <div>
            <form @submit.prevent="editFarm(farmDetail.id)" class="mt-8 bg-gray-100 p-5 rounded-md space-y-3" action="#">
            <div class="text-left rounded-md shadow-sm">
                <label for="">Farm Name</label>
                <input 
                    v-model="editForm.name"
                    type="text" 
                    class="
                        mt-1
                        appearance-none
                        relative
                        block
                        w-full
                        px-3
                        py-2
                        placeholder-gray-500
                        text-gray-900
                        rounded-md
                        focus:outline-none
                        focus:z-10" />
            </div>

            <div class="text-left rounded-md shadow-sm">
                <label for="">Location</label>
                <input 
                    v-model="editForm.location"
                    type="text" 
                    class="
                        mt-1
                        appearance-none
                        relative
                        block
                        w-full
                        px-3
                        py-2
                        placeholder-gray-500
                        text-gray-900
                        rounded-md
                        focus:outline-none
                        focus:z-10
                    " />
            </div>

            <div class="text-left rounded-md shadow-sm">
                <label for="">area</label>
                <input 
                    v-model="editForm.area" 
                    type="number" 
                    class="
                        mt-1
                        appearance-none
                        relative
                        block
                        w-full
                        px-3
                        py-2
                        placeholder-gray-500
                        text-gray-900
                        rounded-md
                        focus:outline-none
                        focus:z-10
                    " />
            </div>

            <button type="submit" class="
                mt-4
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-lg
                font-medium
                rounded-md
                text-black
                bg-blue-400
                hover:bg-blue-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                
                ">
                Submit
            </button>

        </form>
        </div>
        <div class="w-full px-5">
            <button @click="deleteFarm(farmDetail.id)" class="w-full p-3 rounded-md text-lg text-white font-black bg-red-600 hover:bg-red-700">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: 'DetailReq',
    data() {
        return {
            editForm : {
                name: '',
                location: '',
                area: '',
                formId: ''
            }
        }
    },
    computed:{
        ...mapState(['reqDetail', 'farmDetail']),
    },
    watch: {
        farmDetail: function () {
            this.editForm.name = this.farmDetail.name
            this.editForm.TypeId = this.farmDetail.TypeId
            this.editForm.location = this.farmDetail.location
            this.editForm.area = this.farmDetail.area,
            this.editForm.formId = this.reqDetail.id
        }
    },
    methods:{
        ...mapActions(['putFarm', 'deletingFarm', 'getFarm', 'getReq', 'sendEmail']),
        ...mapMutations({
            fillCurTable: 'FILL_CUR_TABLE'
        }),
        async editFarm(farmId) {
            await this.putFarm({
                editForm: this.editForm,
                farmId
            })
            await this.sendEmail({
                email: this.reqDetail.user,
                message: 'your farm already changed'
            })
            await this.getFarm()
            await this.getReq()

            this.fillCurTable('admReq')

            this.sendEmail({
                email: this.reqDetail.user,
                message: `your ${this.farmDetail.name} farm already changed`
            })
        },

        async deleteFarm(farmId) {
            await this.deletingFarm({
                farmId,
                formId: this.reqDetail.id
            })

            await this.getFarm()
            await this.getReq()

            this.fillCurTable('admReq')

            this.sendEmail({
                email: this.reqDetail.user,
                message: `your ${this.farmDetail.name} succesfull deleted`
            })
        }
    },
}
</script>

<style>

</style>