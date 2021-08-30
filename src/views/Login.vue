<template>
  <div class="col d-flex flex-column align-items-center justify-content-center">
    <h1 class="font-chomsky">The New Roman Times</h1>
    <b-card header="Login" class="w-50">
      <b-form @submit.prevent="login">
        <label for="email">Email</label>
        <b-form-input
          v-model="form.email"
          id="email"
          class="mb-2"
          placeholder="type your email"
        ></b-form-input>

        <label for="password">Password</label>
        <b-form-input
          v-model="form.password"
          id="password"
          type="password"
          class="mb-3"
          placeholder="type your password"
        ></b-form-input>
        <div class="d-flex justify-content-center">
          <b-button type="submit" variant="dark">Login</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('loginAction', this.form);
    },
  },
};
</script>

<style></style>
