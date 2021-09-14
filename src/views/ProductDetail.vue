<template>
  <div>
    <ButtonSearch class="my-2"></ButtonSearch>
    <div class="d-flex justify-content-beetween">
      <div class="col-4 p-3">
        <img :src="product.image_url" width="300px" height="400px">
        <h4>{{product.name}}</h4>
        <h5>{{price}}</h5>
        <span>{{product.selling_unit}}</span><br>
        <span>Harga berbeda di tiap apotik</span><br>
        <button @click.prevent="addFavorites(payload)" class="my-2 rounded btn btn-outline-primary">Tambah ke favorite <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
          <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
          <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
          </svg>
        </button>
      </div>
    <div class="col-6 p-3 px-5 text-start">
      <h5>Kategori</h5>
      <p style="color:blue">{{category}}</p>
      <hr>
      <h5>Deskripsi</h5>
      <p>{{product.description}}</p>
      <hr>
      <h5>Indikasi Umum</h5>
      <p>{{product.general_indication}}</p>
      <hr>
      <h5>Komposisi</h5>
      <p>{{product.composition}}</p>
      <hr>
      <h5>Dosis</h5>
      <p>{{product.dosage}}</p>
      <hr>
      <h5>Aturan Pakai</h5>
      <p>{{product.how_to_use}}</p>
      <hr>
      <h5>Kontra Indikasi</h5>
      <p>{{product.contraindication}}</p>
      <hr>
      <h5>Perhatian</h5>
      <p>{{product.warning}}</p>
      <hr>
      <h5>Segmentasi</h5>
      <p>{{product.segmentation}}</p>
      <hr>
      <h5>Kemasan</h5>
      <p>{{product.packaging}}</p>
      <hr>
      <h5>Manufaktur</h5>
      <p>{{product.manufacturer_name}}</p>
      <hr>
      <h5>No. Registrasi</h5>
      <p>{{product.bpom_number}}</p>
      <hr>
    </div>
  </div>
  </div>
</template>

<script>
import Swal from "../apis/swal"
import ButtonSearch from "../components/ButtonSearch.vue"
export default {
    name:"ProductDetail",
    methods:{
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
      },
    },
    computed:{
        product(){
            return this.$store.state.product
        },
        price(){
            if (this.product.base_price == this.product.min_price) {
                return `Rp ${this.product.base_price.toLocaleString("id-ID")}`
            } else{
                return `Rp ${this.product.min_price.toLocaleString("id-ID")} - Rp ${this.product.base_price.toLocaleString("id-ID")}`
            }
        },
        category(){
          let arr = this.product.categories.map(el=>{
            return el.name
          })
          let string = arr.join(",")
          return string
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
    components:{
      ButtonSearch
    }
}
</script>

<style>

</style>