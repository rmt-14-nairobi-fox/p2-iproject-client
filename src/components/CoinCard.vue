<template>
  <div class="flex flex-col accent-orange-bg rounded-xl shadow-inner">
    <button @click="changePage(CoinData.id)" class="static text-white flex items-center accent-grey-1-bg px-3 py-5 rounded-xl shadow-xl">
      <h1 class="w-6/12 text-8xl font-medium accent-orange-text">{{CoinData.symbol}}</h1>
      <div class="w-6/12 flex flex-col items-start ml-3">
        <h1 class="text-xl font-light">{{CoinData.name}}</h1>
        <h2 v-if="CoinData.symbol !== 'BTC'">{{Math.ceil(CoinData.price * btcPrice * currencyRatio).toLocaleString("id-ID")}} {{currency}}</h2>
        <h2 v-if="CoinData.symbol === 'BTC'">{{Math.ceil(CoinData.price * currencyRatio).toLocaleString("id-ID")}} {{currency}}</h2>
        <div class="flex justify-center">
          <h3>Recommendation: </h3>
          <h1 v-if="CoinData.recommendation === 'buy'" class="ml-3 bg-green-500 px-3 rounded-lg font-bold">{{CoinData.recommendation}}</h1>
          <h1 v-if="CoinData.recommendation === 'sell'" class="ml-3 accent-orange-bg px-3 rounded-lg font-bold">{{CoinData.recommendation}}</h1>
        </div>
      </div>
    </button>
    <button @click="addToWatchers()" v-if="isLogin === true" class="hover:bg-gray-600 hover:bg-opacity-20 flex items-center justify-center text-white w-full rounded-b-xl">
      <i class="far fa-eye mr-2"></i>
      <h1 class="font-normal my-1">add to my watchers list</h1>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Coin',
  props: ['CoinData'],
  methods: {
    changePage (id) {
      this.$router.push(`/coins/${id}`)
    },
    addToWatchers () {
      this.$store.dispatch('addWatchers', this.CoinData.id)
    }
  },
  computed: {
    btcPrice () {
      return this.$store.state.btcPrice
    },
    isLogin () {
      return this.$store.state.isLogin
    },
    currency () {
      return this.$store.state.currency
    },
    currencyRatio () {
      return this.$store.state.currencyRatio
    }
  }
}
</script>

<style>

</style>
