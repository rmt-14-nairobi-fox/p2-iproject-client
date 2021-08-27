<template>
    <div class="flex flex-col justify-between min-h-screen">

        <cus-navbar></cus-navbar>
    <div class="w-full container mx-auto pt-28">

        <div>
            <h1 class="text-4xl">Add New Farm</h1>
        </div>

        <form @submit.prevent="addFarm" class="mt-8 bg-gray-100 p-5 rounded-md space-y-3" action="#">
            <div class="text-left rounded-md shadow-sm">
                <label for="">Farm Name</label>
                <input v-model="addForm.name" type="text" class="
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
                    " placeholder="e.g. kebun sawit" />
            </div>

            <div class=" text-left rounded-md shadow-sm">
                <label for="">Description</label>
                <input v-model="addForm.description" type="text" class="
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
                    " placeholder="e.g. butuh irigasi" />
            </div>

            <div class="text-left rounded-md shadow-sm">
                <label for="">Location</label>
                <input v-model="addForm.location" type="text" class="
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
                    " placeholder="e.g. Jakarta" />
            </div>

            <div class="text-left rounded-md shadow-sm">
                <label for="">Surface Area</label>
                <input v-model="addForm.area" type="number" class="
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
                    " placeholder="e.g. 20000 (in ha)" />
            </div>

            <div class="text-left">
                <label for="">Type</label><br>

                <select v-model="addForm.TypeId" class="text-gray-700 rounded-md mt-1">
                    <option 
                        v-for="item in typeTable" 
                        :key="'type'+item.id" 
                        :value="item.id"
                    >
                        {{ item.name  }}
                    </option>
                    
                </select>
            </div>

            <div class="text-left">
                <label for="">Upload image</label><br>

                <input  
                        @change="(e) => uploadImage(e)"
                        id="imgUrl" type="file" class="
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
        <HFooter></HFooter>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HFooter from 'vue-hacktiv8-footer'
import CusNavbar from "../../components/customer/CusNavbar.vue"

export default {
    name: 'addFarm',
    components:{
        CusNavbar,
        HFooter,
    },
    data() {
        return {
            addForm: {
                name: '',
                description: '',
                TypeId: '',
                location: '',
                area: '',
                imgUrl: null
            }
        }
    },
    computed: {
        ...mapState(['typeTable'])
    },
    methods: {
        ...mapActions(['getType', 'createFarm']),
        uploadImage(e){
            this.addForm.imgUrl = e.target.files[0]
        },
        async addFarm() {
            const { 
                name, 
                description, 
                TypeId, 
                location, 
                area,
                imgUrl
            } = this.addForm;
            
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('TypeId', TypeId);
            formData.append('location', location);
            formData.append('area', area);
            formData.append('imgUrl', imgUrl);

            await this.createFarm(formData)

            for (const key in this.addForm) {
                this.addForm[key] = '';
            }
            this.addForm.imgUrl = null;

            this.$router.push({name:'CusHome'})
        }
    },
    async created() {
        await this.getType()
    }
}
</script>

<style>

</style>