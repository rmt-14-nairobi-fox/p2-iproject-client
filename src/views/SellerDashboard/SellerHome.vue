<template>
  <section id="home-page">
    <nav
      class="navbar navbar-expand-sm navbar-dark"
      style="background-color: #191919;"
    >
      <a href="#" class="navbar-brand">Store</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Show Ready</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Show Pending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Show History</a>
          </li>
        </ul>
      </div>
      <div class="pull-right">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logoutBtn" id="logout-btn"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
    <div class="page-heading">
      <div class="page-title">
        <div class="row">
          <div class="mx-auto">
            <h1 class="text-center">
              Item Listing
            </h1>
            <p class="text-subtitle text-center">
              Your item listing
            </p>
          </div>
        </div>
      </div>
      <div class="kekanan">
      <a
        href="#"
        class="btn btn-primary btn-dark ml-auto mb-3"
        style="font-weight: bolder;text-align:right"
        >Add more item</a
      >
      </div>
      <div class="section">
        <table
          class="table table-striped table-dark table-hover table-bordered mr-5"
          style="background-color: #191919"
          id="table1"
        >
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Ready In</th>
              <th>Action</th>
            </tr>
          </thead>
          <seller-table v-for="item in sellerItems" :key="item.id" :item="item"></seller-table>
        </table>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import SellerTable from "../../components/SellerComponents/SellerTable.vue"
import { mapActions, mapState } from 'vuex';
export default {
  name: "SellerHome",
  methods: {
    ...mapActions(["logout", "fetchSellerItem"]),
    async logoutBtn(){
    await this.logout()
    this.$router.push("/")
    }
  },
  components:{
    SellerTable
  },
  created(){
    this.fetchSellerItem()
  },
  computed: {
    ...mapState(["sellerItems"])
  }
};
</script>

<style>
.kekanan{
  display: flex;
  justify-content: flex-end;
}
</style>
