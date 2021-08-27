<template>
  <section class="pt-4 accent-orange-bg mx-10 rounded-3xl">
    <h1 class="mb-5 ml-5 text-6xl font-bold main-dark-text">{{coin.name}}</h1>
    <div class="accent-grey-1-bg rounded-3xl px-5 py-5">
    <div class="flex mb-5">
      <div class="flex w-1/12">
        <h2 class="text-2xl font-semibold text-white w-11/12">Last Price </h2>
        <h2 class="text-2xl font-semibold text-white w-1/12">: </h2>
      </div>
      <div class="flex w-11/12">
        <h2 v-if="coin.name !== 'Bitcoin'" class="px-3 text-2xl font-light text-white ">{{Math.ceil(coin.price * btcPrice * currencyRatio).toLocaleString("id-ID")}}</h2>
        <h2 v-if="coin.name === 'Bitcoin'" class="px-3 text-2xl font-light text-white ">{{Math.ceil(coin.price * currencyRatio).toLocaleString("id-ID")}}</h2>
        <h2 class="text-2xl font-medium text-white ">{{currency}}</h2>
      </div>
    </div>
    <div class="mb-16 flex">
      <div class="flex w-1/12">
        <h2 class="text-2xl font-semibold text-white w-11/12 accent-orange-text">Analysis</h2>
        <h2 class="text-2xl font-semibold text-white w-1/12">: </h2>
      </div>
    <p class="px-3 text-xl font-light text-white w-11/12">
      "{{coin.analysis}}"
    </p>
    </div>
    <h1 v-if="coin.name !== 'Bitcoin'" class="accent-orange-text font-light text-md">chart data are in BTC</h1>
    <LineChart
    :chartdata="chartData"
    :options="options"
    />
    </div>
  </section>
</template>

<script>
import LineChart from '../components/LineChart.vue'
export default {
  data () {
    return {
      chartData: {},
      options: {},
      coin: {}
    }
  },
  name: 'CoinPage',
  props: ['watcher'],
  components: {
    LineChart
  },
  computed: {
    coins () {
      return this.$store.state.coins
    },
    btcPrice () {
      return this.$store.state.btcPrice
    },
    currency () {
      return this.$store.state.currency
    },
    currencyRatio () {
      return this.$store.state.currencyRatio
    }
  },
  created () {
    // console.log(this.coins)
    this.$store.dispatch('fetchCoins')
    let priceHistory = []
    if (this.coins.length !== 0 && this.$route.params.id) {
      const coinId = this.$route.params.id
      this.coins.forEach(crypto => {
        if (crypto.id === +coinId) {
          priceHistory = crypto.priceHistory
          this.coin = crypto
        }
      })
      const labels = priceHistory.map((d, i) => i)
      this.chartData = {
        labels,
        datasets: [
          {
            data: priceHistory,
            borderColor: '#FF4C29'
          }
        ]
      }
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
      console.log(this.chartData)
      console.log(this.options)
    } else if (this.watcher.Coin) {
      this.coin = this.watcher.Coin
      priceHistory = this.watcher.Coin.priceHistory
      const labels = priceHistory.map((d, i) => i)
      this.chartData = {
        labels,
        datasets: [
          {
            data: priceHistory,
            borderColor: '#FF4C29'
          }
        ]
      }
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    } else {
      this.$router.push('/coins')
    }
  }
}
</script>

<style>

</style>
