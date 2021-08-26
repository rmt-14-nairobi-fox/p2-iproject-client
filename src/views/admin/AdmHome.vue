<template>
<div>
    <adm-sidebar></adm-sidebar>
    <div 
      style="padding-left:320px;" 
      class="h-screen w-full px-4 py-12">
      <adm-farm v-show="curTable === 'admFarm'"></adm-farm>
      <adm-request v-show="curTable === 'admReq'"></adm-request>
    </div>
    <div style="padding-left:300px;" class="w-full">
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import AdmSidebar from '../../components/admin/AdmSidebar.vue'
import HFooter from 'vue-hacktiv8-footer'
import AdmFarm from '../../components/admin/AdmFarm.vue'
import AdmRequest from '../../components/admin/AdmRequest.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { 
    AdmSidebar,
    HFooter,
    AdmFarm,
    AdmRequest
  },
    name:'AdmHome',
    computed: {
      ...mapState(['curTable', 'userInfo'])
    },
    methods: {
      ...mapActions(['getUser', 'getFarm', 'getReq'])
    },
    async created() {
        await this.getUser()

        if (this.userInfo.role === 'customer') {
          this.$router.push({ name: 'CusHome' })
        }

        await this.getFarm()
        await this.getReq()
    }
}
</script>

<style>

</style>