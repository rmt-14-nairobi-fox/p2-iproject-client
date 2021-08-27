<template>
  <div class="accent-orange-bg mb-10 pb-5 mx-5 rounded-3xl">
  <CoinPage
  :watcher="watcher"
  />
  <div class="flex items-center mx-10 pt-4">
    <form @submit.prevent="editWatcher(watcher.id)" class="w-10/12 flex items-center">
      <div class="w-5/12 flex pr-5">
        <h2 class="w-3/12 text-2xl font-md main-dark-text">Minimum :</h2>
        <div class="w-9/12 rounded-md main-dark-bg accent-orange-text flex items-center justify-between pr-3">
          <input type="text" class=" shadow-inner rounded-md main-dark-bg accent-orange-text py-1 px-3" v-model="minPrice">
          <h1>{{currency}}</h1>
        </div>
      </div>
      <div class="w-5/12 flex pr-5">
        <h2 class=" w-3/12 text-2xl font-md main-dark-text">Maximum :</h2>
        <div class="w-9/12 rounded-md main-dark-bg accent-orange-text flex items-center justify-between pr-3">
          <input type="text" class=" shadow-inner rounded-md main-dark-bg accent-orange-text py-1 px-3" v-model="maxPrice">
          <h1>{{currency}}</h1>
        </div>
        <!-- <input type="text" class="w-9/12 shadow-inner rounded-md main-dark-bg accent-orange-text py-1 px-3" v-model="maxPrice"> -->
      </div>
      <button type="submit" class="w-2/12 main-dark-bg text-xl accent-orange-text font-md rounded-lg p-1 mr-3">
      Update Treshold
      </button>
    </form>
    <button @click="deleteWatcher(watcher.id)" class="w-2/12 main-dark-bg text-xl accent-orange-text font-md rounded-lg p-1">
      Remove Watcher
    </button>
    </div>
  </div>
</template>

<script>
import CoinPage from '../views/CoinPage.vue'
export default {
  name: 'WatcherCard',
  props: ['watcher'],
  components: {
    CoinPage
  },
  data () {
    return {
      minPrice: 0,
      maxPrice: 0
    }
  },
  computed: {
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
  methods: {
    editWatcher (id) {
      const data = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice
      }
      if (this.watcher.Coin.symbol !== 'BTC') {
        data.minPrice = data.minPrice / this.btcPrice / this.currencyRatio
        data.maxPrice = data.maxPrice / this.btcPrice / this.currencyRatio
      }
      if (data.minPrice >= this.watcher.Coin.price && data.minPrice !== 0) {
        console.log('minimum Treshold cannot be bigger than current price')
      } else if (data.maxPrice <= this.watcher.Coin.price && data.maxPrice !== 0) {
        console.log('maximum treshold cannot be smaller than current price')
      } else {
        const payload = {
          id,
          data
        }
        this.$store.dispatch('editWatcher', payload)
      }
    },
    deleteWatcher (id) {
      this.$store.dispatch('deleteWatcher', id)
    }
  },
  created () {
    if (this.watcher.Coin.symbol !== 'BTC') {
      this.minPrice = this.watcher.minPrice * this.btcPrice
      this.maxPrice = this.watcher.maxPrice * this.btcPrice
    } else {
      this.minPrice = this.watcher.minPrice
      this.maxPrice = this.watcher.maxPrice
    }
    this.minPrice = this.minPrice * this.currencyRatio
    this.maxPrice = this.maxPrice * this.currencyRatio
  }

}
</script>

<style>

</style>
