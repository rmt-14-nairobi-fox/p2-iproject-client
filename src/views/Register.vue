<template>
  <div class="col d-flex flex-column align-items-center justify-content-center">
    <h1 class="font-chomsky">The New Roman Times</h1>
    <b-card header="Register" class="w-50">
      <b-form @submit.prevent="register" ref="register-form">
        <label for="name">Name</label>
        <b-form-input id="name" name="name" class="mb-2"></b-form-input>

        <label for="email">Email</label>
        <b-form-input id="email" name="email" class="mb-2"></b-form-input>

        <label for="password">Password</label>
        <b-form-input
          type="password"
          id="password"
          name="password"
          class="mb-2"
        ></b-form-input>

        <label for="profile-image">Profile Image</label>
        <b-form-file
          id="profile-image"
          name="profile-image"
          class="mb-2"
          placeholder="Choose an image or drop it here..."
          drop-placeholder="Drop file here..."
          accept="image/*"
        ></b-form-file>

        <label for="newsPrefId">News Preference</label>
        <b-form-select
          name="newsPrefId"
          id="newsPrefId"
          v-model="newsPrefId"
          :options="newsPrefs"
        ></b-form-select>

        <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="dark">Register</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Register',
  data() {
    return {
      newsPrefId: 1,
    };
  },
  computed: {
    ...mapState(['newsPrefs']),
  },
  methods: {
    register() {
      const form = new FormData(this.$refs['register-form']);

      this.$store.dispatch('registerAction', form);
    },
    fetchNewsPrefs() {
      this.$store.dispatch('fetchNewsPrefs');
    },
  },
  created() {
    this.fetchNewsPrefs();
  },
};
</script>

<style></style>
