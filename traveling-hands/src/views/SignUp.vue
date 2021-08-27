<template>
  <section>
    <br><br>
    <div id="register-page" style="text-align: center">
      <h2>Sign Up</h2>
      <small style="color: dimgray">Sign up to access your account</small>
      <br /><br />
      <form>
        <div>
          <label class="pr-28 text-gray-600 font-light">Email address : </label>
          <br>
          <input
            v-model="email"
            id="register-email"
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
          <br>
          <input
            v-model="password"
            id="register-password"
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
          @click.prevent="clickRegister"
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-20
            rounded-full
          "
        >
          Sign Up
        </button>
        <br />
        <br />
        <div>
          <small style="color: cadetblue">
            Already have an account yet?
            <button
              @click.prevent="clickSignIn"
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
              Sign in
            </button>
          </small>
        </div>
        <br />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    clickRegister() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("handleRegister", payload);
      this.email = ""
      this.password = ""
    },
    clickSignIn() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
