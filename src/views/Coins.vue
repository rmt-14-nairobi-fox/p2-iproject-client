<template>
  <section>
    <h1 class="text-6xl font-bold ml-10 mb-10 accent-orange-text">Coins</h1>
    <div class=" grid grid-cols-4 gap-5 px-10">
      <CoinCard
      v-for="coin in coins"
      :key="coin.id"
      :CoinData="coin"
      />
    </div>
  </section>
</template>

<script>
import CoinCard from '../components/CoinCard.vue'
export default {
  name: 'Coins',
  components: {
    CoinCard
  },
  computed: {
    coins () {
      return this.$store.state.coins
    }
  },
  created () {
    this.$store.dispatch('fetchCoins')
  }
}
</script>
