<template>
    <div class="flex flex-col justify-between min-h-screen">
        <div>
            <cus-navbar></cus-navbar>

            <div class="pt-28 mx-auto container">
                <cus-card v-show="curPage === 'listCard'"></cus-card>
                <cus-request v-show="curPage === 'listReq'"></cus-request>

            </div>
        </div>
        
        <HFooter></HFooter>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HFooter from 'vue-hacktiv8-footer'
import CusNavbar from '../../components/customer/CusNavbar.vue'
import CusCard from '../../components/customer/CusCard.vue'
import CusRequest from '../../components/customer/CusRequest.vue'


export default {
    name: 'CusHome',
    components: { 
        HFooter,
        CusNavbar,
        CusCard,
        CusRequest,
    },
    computed: {
        ...mapState(['farmData', 'userInfo', 'curPage'])
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