<template>
  <section id="login-page" class="form-register text-center text-white mt-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 box">
          <div class="title">
            <h1>Register</h1>
          </div>
          <form @submit.prevent="handleRegister" class="form-reg">
            <input type="text" class="form-cl" placeholder="UserName" v-model="username" /><br />
            <input type="email" name="email" class="form-cl" placeholder="Email" v-model="email" /><br />
            <input type="password" name="password" class="form-cl" placeholder="Password" v-model="password" /><br />
            <input type="submit" value="Register" class="form-cl submit" />
          </form>
          <div style="margin: auto">
            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
          </div>
        </div>
        <div class="col-md-6 box">
          <div class="anime">アニメ</div>
          <div class="jumbotron-tag">
            <p>Hai Kawan, Anime merupakan salah satu animasi buatan Jepang, dan dengan mendaftar di web ini kalian bisa membantu orang orang menemukan anime yang cocok untuk mereka dari review kalian</p>
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
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      params: {
        client_id: "889000753785-7ocipgkjnqu0ok7ujv7sgmqv98spqe31.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 630,
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
    handleRegister() {
      this.$store
        .dispatch("register", { email: this.email, password: this.password, username: this.username })
        .then((res) => {
          this.$router.push("/login");
          successHandler("Success reqistered\n " + res.data.email + "\n now you can register");
        })
        .catch((err) => {
          errorHandler(err);
        });
    },
  },
};
</script>

<style>
.form-reg p {
  text-shadow: none !important;
}
</style>
