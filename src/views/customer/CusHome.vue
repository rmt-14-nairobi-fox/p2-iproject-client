<template>
    <div class="flex flex-col justify-between min-h-screen">
        <div>
            <cus-navbar></cus-navbar>

            <div class="pt-28 mx-auto container">
                <!-- <card-panel></card-panel> -->
            </div>
        </div>
        
        <HFooter></HFooter>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HFooter from 'vue-hacktiv8-footer'
import CusNavbar from '../../components/customer/CusNavbar.vue'


export default {
    name: 'CusHome',
    components: { 
        HFooter,
        CusNavbar,
    },
    computed: {
        ...mapState(['farmData', 'userInfo'])
    },
    methods: {
        ...mapActions(['getUser', 'getFarm', 'getReq'])
    },
    async created() {
        await this.getUser()

        if (this.userInfo.role === 'admin') {
            this.$router.push({ name: 'AdmHome' })
        }

        await this.getFarm()
        await this.getReq()
    }
}
</script>

<style>

</style>