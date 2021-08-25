<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding-left: 50px">
        <a @click.prevent="showHome" class="navbar-brand" href="">Fistator</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a v-show="this.$store.state.isLogin === true" @click.prevent="showHome" class="nav-item nav-link active" href="">Home</a>
                <a v-show="this.$store.state.isLogin === true" @click.prevent="showWishlist" class="nav-item nav-link" href="">Fish-to-Catch List</a>
                <a v-show="this.$store.state.isLogin === true" @click="logout" class="nav-item nav-link" href="">Logout</a>
                <a v-show="this.$store.state.isLogin === false" @click.prevent="toLogin" class="nav-item nav-link" href="">Login</a>
                <a v-show="this.$store.state.isLogin === false" @click.prevent="toRegister" class="nav-item nav-link" href="">Sign Up</a>
            </div>
        </div>
    </nav>
</template>

<script>
import router from "../router/index"
import {gapi} from "vue-google-login";

export default {
    name: "Navbar",
    methods: {
        logout() {
            localStorage.clear();
            this.$store.commit("SET_IS_LOGIN", { isLogin: false })
            this.$router.push("/login")
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        },
        showHome() {
            router.push({path:"/"})
        },
        showWishlist() {
            router.push({path: "/wishlist"})
        },
        toLogin() {
            router.push({path: "/login"})
        },
        toRegister() {
            router.push({path: "/register"})
        }
    }
}
</script>

<style>

</style>