<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
    <div class="container-fluid">
      <h2 class="text-white ms-4">Rate Your Anime</h2>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"> <i class="bx bx-home"></i> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allreview" class="nav-link" aria-current="page" v-if="this.$store.state.isLogin"> <i class="bx bx-book-open"></i> All Review</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/myreview" class="nav-link" aria-current="page" v-if="this.$store.state.isLogin"> <i class="bx bx-game"></i> My Review</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/discuse" class="nav-link" aria-current="page" v-if="this.$store.state.isLogin"> <i class="bx bxl-discourse"></i> DISQUS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" aria-current="page" v-if="!this.$store.state.isLogin"> <i class="bx bx-log-in"></i> LOG-IN</router-link>
          </li>
          <li class="nav-item" @click.prevent="logoutHandler" v-if="this.$store.state.isLogin">
            <GoogleLogin :params="params" :logoutButton="true" class="nav-link button-logout"><i class="bx bx-log-out"></i> Logout</GoogleLogin>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import GoogleLogin from "vue-google-login";
import successHandler from "../helper/successCase";
export default {
  name: "NavBarPage",
  data() {
    return {
      params: {
        client_id: "889000753785-7ocipgkjnqu0ok7ujv7sgmqv98spqe31.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    logoutHandler() {
      console.log("masuk");
      localStorage.clear();
      this.$store.commit("LOGIN_CHECK");

      successHandler("See you later");
    },
  },
};
</script>

<style>
.button-logout {
  appearance: none;
  background: none;
  border: none;
  outline: none;
}
</style>
