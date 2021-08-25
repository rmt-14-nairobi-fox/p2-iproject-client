<template>
  <div class="flex justify-center items-center">
    <div class="h-screen bg-blue-100 border-2 border-black">
      asasaslkafaiv
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Login',
  computed: {
    ...mapState(['greetings'])
  },
  methods: {
    ...mapActions(['getStart'])
  },
  created () {
    this.getStart()
      .then(() => {})
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style></style>
