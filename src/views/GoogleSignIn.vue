<template>
  <div class="col d-flex flex-column align-items-center justify-content-center">
    <h1 class="font-chomsky">The New Roman Times</h1>
    <b-card header="Google Sign In" class="w-50">
      <b-form @submit.prevent="login">
        <label for="newsPrefId"
          >News Preference
          <span class="text-danger">* First time only</span></label
        >
        <b-form-select
          id="newsPrefId"
          v-model="newsPrefId"
          :options="newsPrefs"
        ></b-form-select>
        <div class="d-flex mt-3 justify-content-center">
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
          ></GoogleLogin>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import { mapState } from 'vuex';
export default {
  name: 'GoogleSignIn',
  data() {
    return {
      newsPrefId: 1,
      params: {
        client_id:
          '439353409036-732353rj9n7utpg8uaostb71uborv2am.apps.googleusercontent.com',
      },
      renderParams: {
        width: 200,
        height: 36,
        longtitle: true,
      },
    };
  },
  computed: {
    ...mapState(['newsPrefs']),
  },
  components: {
    GoogleLogin,
  },
  methods: {
    login() {
      this.$store.dispatch('loginAction', this.form);
    },
    onSuccess(googleUser) {
      const idToken = googleUser.getAuthResponse().id_token;

      this.$store.dispatch('googleSignIn', {
        idToken,
        newsPrefId: this.newsPrefId,
      });
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
