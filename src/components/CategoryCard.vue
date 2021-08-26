<template>
    <div class="col-3">
        <div class="card my-2">
            <div class="card-body d-flex">
                <img :src="category.image_url" alt="" style="width:50px">
                <a @click.prevent="categoryDetail(category.slug)" href="" class="text-decoration-none text-dark mx-4 my-1" >
                    <h5 class="card-title">{{category.attributes.name}}</h5>
                </a>
            </div>
        </div>
        <!-- <pre>{{JSON.stringify(category,null,2)}}</pre> -->
    </div>
</template>

<script>
export default {
    name:"CategoryCard",
    props:["category"],
    methods:{
        categoryDetail(slug){
            this.$store.dispatch("fetchProducts",slug)
            .then((data)=>{
                console.log(data);
                this.$router.push(`/category/${slug}`).catch(()=>{})
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