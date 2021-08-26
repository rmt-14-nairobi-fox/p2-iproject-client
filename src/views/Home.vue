<template>
  <div class="home">
        <!-- Header-->
        <header class="bg-primary bg-gradient text-white">
            <div class="container px-4 text-center">
                <h1 class="fw-bolder">Cari Obat Mudah Dan Cepat</h1>
                <p class="lead">Website Pencarian Obat Terbaik di Indonesia</p>
              <ButtonSearch></ButtonSearch>  
            </div>
        </header>
        <div class="container p-4">
            <h2 class="text-start">Obat & Vitamin Berdasarkan Kategori</h2>
              <Category></Category>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ButtonSearch from "../components/ButtonSearch.vue"
import Category from '../views/Category.vue'
export default {
  name: 'Home',
  components:{
    Category,
    ButtonSearch
  }
}
</script>
<style >
</style>
