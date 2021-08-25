<template>
  <section id="navbar">
    <nav
      class="navbar navbar-expand-sm navbar-dark"
      style="background-color: #191919;padding:0 30px"
    >
      <a href="#" class="navbar-brand">Store</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goToHome">Show Ready Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goToPending">Show Upcoming Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="showWishlist">Show Wishlist</a>
          </li>
        </ul>
      </div>
      <div class="pull-right">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" @click.prevent="loginBtn" href="#" id="login-btn"
            v-if="!isLoggedIn"
              >Login</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logoutBtn" href="#" id="logout-btn"
            v-if="isLoggedIn"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "BuyerNavbar",
  computed: {
    ...mapState(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout", "login", "fetchPendingItems", "fetchItems", "fetchWishlist"]),
    loginBtn() {
      this.$router.push("/login");
    },
    logoutBtn() {
      this.logout();
    },
    async goToHome(){
      await this.fetchItems()
      this.$router.push("/")
    },
    async goToPending(){
      await this.fetchPendingItems()
      this.$router.push("/")
    },
    async showWishlist(){
      this.$router.push("/wishlist")
    }
  },
};
</script>

<style></style>
