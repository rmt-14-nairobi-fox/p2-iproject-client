<template>
  <div class="text-center mt-5">
    <form @submit.prevent="onSubmitLogin" style="max-width: 500px; margin: auto">
      <img
        class="mt-4 mb-4 ml-5"
        src="../../assets/a533ccbea4c142c89dc630bf7542e648.png"
        height="100"
        width="120"
        alt="Freelance App Logo"
      />
      <h5>Please Login</h5>
      <label class="sr-only">Email Address</label>
      <input
        type="email"
        id="emailAddress"
        class="form-control"
        required
        v-model="formLogin.email"
      />

      <label class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        required
        v-model="formLogin.password"
      />

      <div class="mt-3 mb-4">
        <button class="btn btn-lg btn-primary btn-block">Login</button>
      </div>

      <a href="#"><router-link to="/register/recruiter">you does'nt have account, click here fo register</router-link></a>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["login"]),
    onSubmitLogin(e) {
      e.preventDefault();
      this.login(this.formLogin);
    },
  },
};
</script>