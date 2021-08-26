<template>
  <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
          <div class="leading-loose p-10 bg-white rounded shadow-xl">
            <form class="" @submit.prevent="registerHandler">
              <p class="text-lg text-gray-800 font-medium pb-4">Register</p>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_fullname">
                  Fullname
                </label>
                <input
                  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_fullname"
                  name="cus_fullname"
                  type="text"
                  required=""
                  placeholder="Your Fullname"
                  aria-label="Fullname"
                  v-model="fullname"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">
                  Email
                </label>
                <input
                  class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="email"
                  required=""
                  placeholder="Your Email"
                  aria-label="Email"
                  v-model="email"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_password">
                  Password
                </label>
                <input
                  class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_password"
                  name="cus_password"
                  type="password"
                  required=""
                  placeholder="Your Password"
                  aria-label="Password"
                  v-model="password"
                />
              </div>
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_street">
                  Address
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_street"
                  name="cus_street"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Street"
                  v-model="address"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_city"
                >
                  City
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_city"
                  name="cus_city"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="City"
                  v-model="city"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_zip_code"
                >
                  Zip Code
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_zip_code"
                  name="cus_zip_code"
                  type="text"
                  required=""
                  placeholder="Zip Code"
                  aria-label="Zip_Code"
                  v-model="zipCode"
                />
              </div>
              <div class="">
                <label
                  class="block text-sm text-gray-600"
                  for="cus_`phonenumber`"
                >
                  Phone Number
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_`phonenumber`"
                  name="cus_phonenumber"
                  type="text"
                  required=""
                  placeholder="Your Phone Number"
                  aria-label="Phonenumber"
                  v-model="phonenumber"
                />
              </div>
              <div class="mt-6">
                <button
                  class="
                    px-4
                    py-1
                    text-white
                    font-light
                    tracking-wider
                    bg-btn-in-main
                    rounded
                  "
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div class="mt-2 -m-5">
              <button
                @click="loginAuthHandler"
                class="
                  font-bold
                  px-4
                  py-1
                  border-2
                  tracking-wider
                  font-light
                  btn-google-color btn btn-google
                  ml-5
                "
              >
                <div class="flex flex-row">
                  <img
                    class="my-auto pr-2"
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                  />
                  <strong>Login/Register Using Google</strong>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      address: "",
      city: "",
      zipCode: "",
      phonenumber: "",
    };
  },
  methods: {
    registerHandler() {
      const payload = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        address: this.address,
        city: this.city,
        zipCode: this.zipCode,
        phonenumber: this.phonenumber,
      };
      this.$store.dispatch("registerFunction", payload);
    },
    loginAuthHandler() {
      this.$gAuth
        .signIn()
        .then((res) => {
          const idToken = res.getAuthResponse().id_token;
          return this.$store.dispatch("loginAuthFunction", idToken);
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.btn-google {
  color: #4285f4;
  background-color: #ffffff;
}

.btn {
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 15px;
  cursor: pointer;
}
</style>
