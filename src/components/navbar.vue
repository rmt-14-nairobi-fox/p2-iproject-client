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
            <router-link to="/" class="nav-link active" aria-current="page"> <i class="bx bx-home"></i>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allreview" class="nav-link" aria-current="page"> <i class="bx bx-book-open"></i>All Review</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><i class="bx bxl-discourse" v-if="this.$store.state.isLogin"></i> DISQUS</a>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" aria-current="page" v-if="!this.$store.state.isLogin"> <i class="bx bx-log-in"></i>LOG-IN</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><i class="bx bx-log-out" v-if="this.$store.state.isLogin"></i> LOG-OUT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarPage",
};
</script>

<style></style>
