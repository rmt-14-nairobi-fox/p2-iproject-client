<template>
  <section>
    <WatchersCard
    v-for="watcher in watchers"
    :key="watcher.id"
    :watcher="watcher"
    />
  </section>
</template>

<script>
import WatchersCard from '../components/WatchersCard.vue'
export default {
  name: 'Watchers',
  components: {
    WatchersCard
  },
  computed: {
    watchers () {
      return this.$store.state.watchers
    }
  },
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/coins')
    } else {
      this.$store.dispatch('fetchWatchers')
    }
  }
}
</script>
