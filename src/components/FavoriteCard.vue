<template>
  <div class="col-3 my-2">
        <div class="card" style="width: 18rem;">
        <img :src="favorite.image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <a @click.prevent="productDetail(favorite.slug)" href="" class="text-decoration-none text-dark" >
                <h5 class="card-title">{{favorite.nameDrug}}</h5>
            </a>
            <p class="card-text">{{favorite.sellingUnitDrug}}</p>
            <h5 class="card-text">{{price}}</h5>
            <a @click.prevent="removeFavorites(favorite.id)" href="#" class="btn btn-outline-danger">Hapus Favorite</a>
        </div>
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2"
export default {
    name:"FavoriteCard",
    props:["favorite"],
    computed:{
      price(){
          if (this.favorite.BasePriceDrug == this.favorite.minPriceDrug) {
              return `Rp ${this.favorite.BasePriceDrug.toLocaleString("id-ID")}`
          } else{
              return `Rp ${this.favorite.minPriceDrug.toLocaleString("id-ID")} - Rp ${this.favorite.BasePriceDrug.toLocaleString("id-ID")}`
          }
      },
    },
    methods:{
      removeFavorites(id){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        .then((result)=>{
          if (result.isConfirmed){
            this.$store.dispatch("removeFavorite",id)
            .then((data)=>{
            console.log(data);
            const newFavorite = this.$store.state.favorites.filter(favorite =>{
              return favorite.id !== id
            })
            this.$store.state.favorites = newFavorite
            Swal.fire(
              'Deleted!',
              'Your favorite has been deleted.',
              'success'
            )
            this.$router.push('/favorite').catch(()=>{})
            })
            .catch(err=>{
              Swal.fire({
                icon:'warning',
                title:err.response.data.message
              })
            })
          }
        })
      }
    }
}
</script>

<style>

</style>