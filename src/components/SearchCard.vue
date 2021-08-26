<template>
  <div class="col-3 my-2">
        <div class="card" style="width: 18rem;">
        <img :src="search.image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <a @click.prevent="productDetail(search.slug)" href="" class="text-decoration-none text-dark" >
                <h5 class="card-title">{{search.name}}</h5>
            </a>
            <p class="card-text">{{search.selling_unit}}</p>
            <h5 class="card-text">{{price}}</h5>
            <a href="#" class="btn btn-outline-primary">Tambah ke Favorite</a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SearchCard",
    props:['search'],
    computed:{
        price(){
            if (this.search.base_price == this.search.min_price) {
                return `Rp ${this.search.base_price.toLocaleString("id-ID")}`
            } else{
                return `Rp ${this.search.min_price.toLocaleString("id-ID")} - Rp ${this.search.base_price.toLocaleString("id-ID")}`
            }
        }
    },
    methods:{
        productDetail(slug){
            this.$store.dispatch("fetchProduct",slug)
            .then((data)=>{
                console.log(data);
                this.$router.push(`/product/${slug}`).catch(()=>{})
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>