<template>
  <nav
    class="col-2 p-0 bg-dark d-flex flex-column justify-content-center align-items-center"
  >
    <div class="flex-grow-1 pt-3">
      <img
        width="120"
        height="120"
        style="border-radius: 100%;"
        :src="profile"
        alt=""
      />
      <h3 class="m-0 mt-3 text-light text-center">{{ user_name }}</h3>
    </div>
    <div class="flex-grow-1 w-100">
      <div
        @click="gotoNews"
        class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
        :class="$route.name === 'News' ? 'sidebar-item-active' : ''"
      >
        <b-icon-newspaper />
        <h5 class="m-0 ml-3">News</h5>
      </div>
      <div
        @click="gotoSavedNews"
        class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
        :class="$route.name === 'SavedNews' ? 'sidebar-item-active' : ''"
      >
        <b-icon-bookmark-fill />
        <h5 class="m-0 ml-3">My Space</h5>
      </div>
    </div>
    <div class="flex-grow-1 d-flex flex-column justify-content-end pb-3">
      <b-button @click="logout" variant="danger"
        >Logout <b-icon-box-arrow-right class="ml-3"
      /></b-button>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HomeNav',
  computed: {
    ...mapState(['profile', 'user_name']),
  },
  methods: {
    gotoNews() {
      this.$router.push('/news');
    },
    gotoSavedNews() {
      this.$router.push('/myspace');
    },
    logout() {
      localStorage.clear();

      this.$router.push('/auth/login');
    },
  },
};
</script>

<style></style>
