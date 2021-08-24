<template>
  <section id="login-page" class="form-register text-center text-white mt-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 box">
          <div class="title">
            <h1>Register</h1>
          </div>
          <form @submit.prevent="handleRegister">
            <input type="text" class="form-cl" placeholder="UserName" v-model="username" /><br />
            <input type="email" name="email" class="form-cl" placeholder="Email" v-model="email" /><br />
            <input type="password" name="password" class="form-cl" placeholder="Password" v-model="password" /><br />
            <input type="submit" value="Register" class="form-cl submit" />
          </form>
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
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
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

<style></style>
