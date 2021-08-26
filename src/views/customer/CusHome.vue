<template>
    <div>cusHome</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CusHome',
    computed: {
        ...mapState(['curTable', 'userInfo'])
    },
    async created() {
        await this.getUser()

        if (this.userInfo.role === 'admin') {
            this.$router.push({ name: 'AdmHome' })
        }
    }
}
</script>

<style>

</style>