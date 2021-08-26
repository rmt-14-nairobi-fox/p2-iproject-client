<template>
    <div 
        style="background-color: var(--darkBlue)"
        class="
            text-white
            fixed 
            w-full
            flex 
            flex-row 
            justify-between 
            px-10 
            h-20 
            shadow-md"
    >

        <router-link
            to="/"
            style="color: var(--blueButton)"
            class="my-auto font-black text-4xl"
        >
            KebunKu    
        </router-link>
            
        <div class="flex flex-row gap-8 my-auto font-semibold">
            <div class="bg-gray-50 text-black shadow-inner rounded-lg px-3">
                <div >{{ userInfo.email }}</div>
                <div class="font-normal">{{ userInfo.role }}</div>
            </div>

            <button @click="readReq" class="my-auto font-black"
            >Request
            </button>

            <button @click="logout" class="logout my-auto font-black">Log out</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: 'CusNavbar',
    computed: {
        ...mapState(['userInfo'])
    },
    methods:{
        ...mapMutations({
            switchIsLogin: 'SWITCH_IS_LOGIN',
            fillCurPage: 'FILL_CUR_PAGE'
        }),
        ...mapActions(['swalSuc', 'getReq']),
        logout() {
            localStorage.clear();
            this.switchIsLogin(false);
            this.$router.push({ name: 'CusLogin' })
            this.swalSuc('logout succesful')
        },
        readReq() {
            this.fillCurPage('listReq')
        }
    }
}
</script>

<style>

</style>