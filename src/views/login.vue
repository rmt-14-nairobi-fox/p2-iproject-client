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
          <div class="row text-center">
            <div class="col-md-3" style="margin: auto">
              <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import errorHandler from "../helper/errorHandler";
import successHandler from "../helper/successCase";
import GoogleLogin from "vue-google-login";
export default {
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id: "889000753785-7ocipgkjnqu0ok7ujv7sgmqv98spqe31.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 300,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      const data = googleUser;
      this.$store
        .dispatch("loginGoogle", data)
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
    handleLogin() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then((res) => {
          localStorage.setItem("email", this.email);
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
