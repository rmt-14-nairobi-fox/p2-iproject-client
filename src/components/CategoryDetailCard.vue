<template>
  <div class="col-3 my-2">
        <div class="card" style="width: 18rem;">
        <img :src="product.image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <a @click.prevent="productDetail(product.slug)" href="" class="text-decoration-none text-dark" >
                <h5 class="card-title">{{product.name}}</h5>
            </a>
            <p class="card-text">{{product.selling_unit}}</p>
            <h5 class="card-text">{{price}}</h5>
            <a @click.prevent="addFavorites(payload)" href="#" class="btn btn-outline-primary">Tambah ke Favorite</a>
        </div>
        </div>
    </div>
</template>

<script>
import Swal from "../apis/swal"
export default {
    name:"CategoryDetailCard",
    props:['product'],
    computed:{
        price(){
            if (this.product.base_price == this.product.min_price) {
                return `Rp ${this.product.base_price.toLocaleString("id-ID")}`
            } else{
                return `Rp ${this.product.min_price.toLocaleString("id-ID")} - Rp ${this.product.base_price.toLocaleString("id-ID")}`
            }
        },
        payload(){
          let payload = {
              image_url:this.product.image_url,
              nameDrug: this.product.name,
              sellingUnitDrug: this.product.selling_unit,
              minPriceDrug:this.product.min_price,
              BasePriceDrug:this.product.base_price
          }
          return payload
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
        },
        addFavorites(payload){
            if(!localStorage.access_token){
            this.$router.push('/login').catch(()=>{})
            } else {
            this.$store.dispatch("addFavorite",payload)
                .then((data)=>{
                    console.log(data);
                    Swal.fire({
                        icon:'success',
                        title: `product successfully added to your favorites`
                    })
                    this.$router.push('/').catch(()=>{})
                })
                .catch(err=>{
                    Swal.fire({
                    icon:'warning',
                    title:err.response.data.message
                    })
                })
            }
        }
    },
}
</script>

<style>

</style>