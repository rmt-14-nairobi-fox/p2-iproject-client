<template>
  <div id="app" class="bg-home-main font-family-karla flex">
    <sidebar v-if="isAuth"></sidebar>
    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <!-- Desktop Header -->
      <navbar></navbar>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
    Navbar,
  },
  created: function () {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("FETCH_ISAUTH", true);
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap");

.font-family-karla {
  font-family: alegreya;
}

.bg-home-main {
  background: #fcf8ec;
}

.bg-btn-in-main {
  background: #53b8bb;
}

.bg-btn-in-main-danger {
  background: #f85555;
}

.bg-navbar {
  background: #fad687;
}

.some-text-color {
  color: #fcf8ec;
}

.bg-sidebar {
  background: #9ddac6;
}

.cta-btn {
  color: #3d68ff;
}

.active-nav-link {
  background: #fcf8ec;
}

.nav-item:hover {
  background: #fcf8ec;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}

.account-link:hover {
  background: #3d68ff;
}

.row-table:hover,
.bg-btn-in-main:hover,
.bg-btn-in-main-danger:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.13) 0 0);
  cursor: pointer;
}
</style>
