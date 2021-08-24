<template>
  <section id="login-page" class="form-login text-center text-white mt-2">
    <div class="container">
      <div class="row">
        <div class="title">
          <h1>log-In</h1>
        </div>
        <div class="col-md-12 box">
          <form @submit.prevent="handleLogin">
            <input type="email" name="email" class="form-cl" placeholder="Email" v-model="email" /><br />

            <input type="password" name="password" class="form-cl" placeholder="Password" v-model="password" /><br />

            <input type="submit" value="Log-In" class="form-cl submit" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import errorHandler from "../helper/errorHandler";
import successHandler from "../helper/successCase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          this.$store.commit("LOGIN_SUCCESS");
          this.$router.push("/");
          successHandler("Success to Login");
        })
        .catch((err) => {
          errorHandler(err);
        });
    },
  },
};
</script>

<style></style>
