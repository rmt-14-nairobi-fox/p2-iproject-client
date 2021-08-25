<template>
    <div class="col-3">
        <div class="card my-2">
            <div class="card-body">
                <a @click.prevent="categoryDetail(category.slug)" href="" class="text-decoration-none text-dark" >
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
            console.log(slug);
        }
    }
}
</script>

<style>

</style>