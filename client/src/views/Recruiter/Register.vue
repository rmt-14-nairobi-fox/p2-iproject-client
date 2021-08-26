<template>
  <div class="text-center mt-5">
    <form style="max-width: 500px; margin: auto">
      <img
        class="mt-4 mb-4 ml-5"
        src="../../assets/a533ccbea4c142c89dc630bf7542e648.png"
        height="100"
        width="120"
        alt="Freelance App Logo"
      />
      <h5>Please Register</h5>
      <label class="sr-only">Email Address</label>
      <input
        type="email"
        id="emailAddress"
        class="form-control"
        required
        v-model="formRegister.email"
      />

      <label class="sr-only">Username</label>
      <input
        type="email"
        id="emailAddress"
        class="form-control"
        placeholder="username input"
        required
        v-model="formRegister.username"
      />

      <label class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        required
        v-model="formRegister.password"
      />

      <div class="mt-3 mb-4">
        <button class="btn btn-lg btn-primary btn-block">Register</button>
      </div>

      <a href="#"><router-link to="/login/recruiter"> you already have account, click here</router-link></a>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formRegister: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["register"]),
    onSubmitRegister(e) {
      e.preventDefault();
      this.register(this.formRegister);
    },
  },
};
</script>