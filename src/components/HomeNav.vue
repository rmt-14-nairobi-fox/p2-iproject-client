<template>
  <nav
    class="col-2 p-0 bg-dark d-flex flex-column justify-content-center align-items-center"
  >
    <div
      class="flex-grow-1 d-flex flex-column align-items-center justify-content-start pt-3"
    >
      <img
        width="120"
        height="120"
        style="border-radius: 100%;"
        :src="profile"
        referrerpolicy="no-referrer"
        alt=""
      />
      <h5 class="m-0 mt-3 text-light text-center">{{ user_name }}</h5>
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
        @click="gotoMySpace"
        class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
        :class="$route.name === 'MySpace' ? 'sidebar-item-active' : ''"
      >
        <b-icon-bookmark-fill />
        <h5 class="m-0 ml-3">My Space</h5>
      </div>
      <div
        @click="gotoWeather"
        class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
        :class="$route.name === 'Weather' ? 'sidebar-item-active' : ''"
      >
        <b-icon-cloud-fill />
        <h5 class="m-0 ml-3">Weather</h5>
      </div>
      <div
        @click="gotoCorona"
        class="w-100 text-light p-3 sidebar-item d-flex flex-row align-items-center"
        :class="$route.name === 'Corona' ? 'sidebar-item-active' : ''"
      >
        <b-icon-graph-up />
        <h5 class="m-0 ml-3">Covid Graph</h5>
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
import Vue from 'vue';
import { LoaderPlugin } from 'vue-google-login';

Vue.use(LoaderPlugin, {
  client_id:
    '439353409036-732353rj9n7utpg8uaostb71uborv2am.apps.googleusercontent.com',
});

export default {
  name: 'HomeNav',
  computed: {
    ...mapState(['profile', 'user_name']),
  },
  methods: {
    gotoNews() {
      this.$router.push('/news').catch(() => {});
    },
    gotoMySpace() {
      this.$router.push('/myspace').catch(() => {});
    },
    gotoCorona() {
      this.$router.push('/corona').catch(() => {});
    },
    gotoWeather() {
      this.$router.push('/weather').catch(() => {});
    },
    logout() {
      localStorage.clear();

      Vue.GoogleAuth.then((auth2) => {
        auth2.signOut().then(function() {
          console.log('User signed out.');
        });
      });

      this.$router.push('/auth/login');
    },
  },
};
</script>

<style></style>
