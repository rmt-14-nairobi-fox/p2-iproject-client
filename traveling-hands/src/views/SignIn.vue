<template>
  <section>
    <br><br>
    <div id="login-page" style="text-align: center">
      <h2>Sign in</h2>
      <small style="color: dimgray">Sign in to access your account</small>
      <br /><br />
      <form>
        <div>
          <label class="pr-28 text-gray-600 font-light">Email address : </label>
          <br />
          <input
            v-model="email"
            id="login-email"
            type="email"
            placeholder="you@company.com"
            class="
              w-50%
              mt-2
              mb-6
              px-4
              py-2
              border
              rounded-lg
              text-gray-700
              focus:outline-none focus:border-green-500
            "
          />
          <br /><br />
          <label class="pr-36 text-gray-600 font-light">Password : </label>
          <br />
          <input
            v-model="password"
            id="login-password"
            type="password"
            placeholder="Your Password"
            class="
              w-50%
              mt-2
              mb-6
              px-4
              py-2
              border
              rounded-lg
              text-gray-700
              focus:outline-none focus:border-green-500
            "
          />
        </div>
        <br />
        <button
          @click.prevent="clickLogin"
          class="
            w-50%
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-20
            rounded-full
          "
        >
          Sign In
        </button>
        <br />
        <br />
        <div>
          <small style="color: cadetblue">
            Don't have an account yet?
            <button
              @click.prevent="clickSignUp"
              class="
                bg-transparent
                hover:bg-navy-500
                text-navy-700
                py-2
                px-2
                border border-navy-100%
                rounded
              "
            >
              Sign up
            </button>
            <!-- <br /> -->
            <!-- Or Sign In with Google -->
          </small>
        </div>
        <br />
        <div style="display: flex; justify-content: center">
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
          ></GoogleLogin>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "SignIn",
  data: function () {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "449210706858-e82d130pl92o8ksqrcaljem72nb48gqh.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      // https://www.npmjs.com/package/vue-google-login
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    clickLogin() {
      localStorage.setItem("username", this.email);
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("handleLogin", payload);
      this.email = "";
      this.password = "";
    },
    clickSignUp() {
      this.$router.push("/register");
    },
    onSuccess(googleUser) {
      const payload = {
        access_token: googleUser.getAuthResponse().id_token,
      };
      this.handleGoogleLogin(payload);
    },
  },
};
</script>

<style></style>
