<template>
    <nav 
        style="
            width: 300px; 
            background-color: var(--darkBlue);
        " 
        class="
            fixed 
            flex 
            flex-col 
            justify-between 
            h-screen"
        >

        <div class="space-y-24">
            <h1 
                class="
                    text-5xl 
                    text-center 
                    mt-9 
                    text-gray-50"
                >
                Kebunku
            </h1>

            <div class="mx-5 space-y-3">
                <div class="text-left mb-8 text-lg flex flex-col justify-around text-white">
                    <p>{{userInfo.email}}</p>
                    <p>{{userInfo.role}}</p>
                </div>

                <button
                    @click="toAdmFarm"
                    class="
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
				">
                    List Farm
                </button>

                <button  
                    @click="toAdmReq"
                    class="
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
				">
                    Customer Request
                </button>

            </div>
        </div>

        <div class="mb-8 px-4">
            <button  
                @click="logout"
                class="
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
					focus:ring-blue-500
				">
                    Logout
                </button>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';


export default {
    name: 'AdmSidebar',
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
        ...mapMutations({
            switchIsLogin: 'SWITCH_IS_LOGIN',
            fillCurTable: 'FILL_CUR_TABLE'
        }),

        ...mapActions(['swalSuc']),

        logout() {
            localStorage.clear();
            this.switchIsLogin(false);
            this.$router.push({ name: 'AdmLogin' })
            this.swalSuc('logout succesful')
        },

        toAdmFarm() {
            this.fillCurTable('admFarm')
        },

        toAdmReq() {
            this.fillCurTable('admReq')
        }
    }
}
</script>

<style>

</style>