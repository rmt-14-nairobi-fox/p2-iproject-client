<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding-left: 50px">
        <a @click.prevent="showHome" class="navbar-brand" href="">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a @click.prevent="showHome" class="nav-item nav-link active" href="">Home</a>
                <a @click.prevent="showWishlist" class="nav-item nav-link" href="">Fish-to-Catch List</a>
                <a v-show="this.$store.state.isLogin" @click="logout" class="nav-item nav-link" href="">Logout</a>
                <a v-show="!this.$store.state.isLogin" class="nav-item nav-link" href="">Login</a>
                <a v-show="!this.$store.state.isLogin" class="nav-item nav-link" href="">Sign Up</a>
            </div>
        </div>
    </nav>
</template>

<script>
import router from "../router/index"

export default {
    name: "Navbar",
    methods: {
        logout() {
            localStorage.clear();
            this.$store.commit("SET_IS_LOGIN", { isLogin: false })
            this.$router.push("/login")
        },
        showHome() {
            router.push({path:"/"})
        },
        showWishlist() {
            router.push({path: "/wishlist"})
        }
    }
}
</script>

<style>

</style>