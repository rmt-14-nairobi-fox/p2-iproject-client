<template>
  <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #F8F8FE" id="mainNav">
        <div class="container px-4">
            <img src="../assets/drugs.png" style="height:60px; width:60px;">
            <router-link class="nav-link text-dark" to="/">CariObat</router-link>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto ">
                    <router-link class="nav-link text-dark" to="/chat">Forum Chat</router-link>
                    <router-link v-if="access_token" class="nav-link text-dark" to="/favorite">Favorite</router-link>
                    <router-link v-if="!access_token" class="nav-link text-dark" to="/login">Login</router-link>
                    <router-link v-if="!access_token" class="nav-link text-dark" to="/register">Register</router-link>
                    <li class="nav-item"><a v-if="access_token" @click.prevent="handleLogout" class="nav-link text-dark" href="">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"Navbar",
    methods:{
      handleLogout(){
        this.$store.dispatch("handleLogout")
      }
    },
    computed:{
      access_token(){
          return this.$store.state.access_token
      }
    }
}
</script>

<style>

</style>