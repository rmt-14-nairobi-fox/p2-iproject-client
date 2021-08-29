<template>
  <body class="font-mono bg-gray-400">
    <Header></Header>
    <!-- Container -->
    <div class="flex justify-center px-6">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <!-- Col -->
        <div
          class="
            w-full
            h-full
            bg-gray-400
            lg:block lg:w-1/2
            bg-cover
            rounded-l-lg
          "
          style="
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url('https://static.vecteezy.com/system/resources/previews/002/111/048/original/online-teaching-app-concept-vector.jpg');
          "
        ></div>
        <!-- Col -->
        <div
          class="
            w-full
            lg:w-7/12
            bg-white
            pt-3
            pl-5
            pb-0
            rounded-lg
            lg:rounded-l-none
          "
        >
          <h3 class="text-2xl text-center">Create your Account!</h3>
          <form
            @submit.prevent="registHandler"
            class="px-8 pt-2 bg-white rounded"
          >
            <div class="mb-2">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Your Name
              </label>
              <input
                v-model="fullName"
                class="
                  w-full
                  px-3
                  py-2
                  mb-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div class="mb-2">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                v-model="email"
                class="
                  w-full
                  px-3
                  py-2
                  mb-3
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                id="email"
                type="email"
                placeholder="johndoe@mail.com"
              />
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Username
                </label>
                <!-- border border-red-500 -->
                <input
                  v-model="username"
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="username"
                  type="text"
                  placeholder="johnDoe07"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="c_password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
                >
                  Phone Number
                </label>
                <input
                  v-model="phoneNumber"
                  class="
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="phoneNumber"
                  type="text"
                  placeholder="+62 821-2345-6789"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  Postal Code
                </label>
                <input
                  v-model="zipCode"
                  class="
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="zipCode"
                  type="text"
                  placeholder="35372"
                />
              </div>
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
                >
                  Address
                </label>
                <input
                  v-model="street"
                  class="
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="street"
                  type="text"
                  placeholder="Jl. Setapak, Depan Gang"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  City
                </label>
                <input
                  v-model="city"
                  class="
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="city"
                  type="text"
                  placeholder="Lampung"
                />
              </div>
            </div>

            <div class="text-center">
              <button
                class="
                  w-full
                  px-4
                  py-2
                  font-bold
                  text-white
                  bg-red-500
                  rounded-full
                  hover:bg-red-700
                  focus:outline-none focus:shadow-outline
                "
                type="submit"
              >
                Create Account
              </button>
              <div class="text-center">
                <a
                  class="
                    inline-block
                    text-sm text-red-500
                    align-baseline
                    hover:text-black
                  "
                  href="#"
                  ><router-link to="/login">
                    Already have an account? Login!
                  </router-link>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <HFooter></HFooter>
  </body>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import Header from "../components/Header.vue";
export default {
  name: "Register",
  components: {
    HFooter,
    Header,
  },
  data() {
    return {
      fullName: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      zipCode: "",
      street: "",
      city: "",
    };
  },
  methods: {
    registHandler() {
      const payload = {
        fullName: this.fullName,
        email: this.email,
        username: this.username,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: `${this.street}, ${this.city}, Indonesia. ${this.zipCode}`,
      };

      this.$store.dispatch("userRegist", payload);
    },
  },
};
</script>

<style>
.header {
  background-color: rgb(128, 0, 60);
}
</style>
