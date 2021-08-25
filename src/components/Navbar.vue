<template>
  <div class="sticky top-0 bg-red-500">
    <nav class="flex px-4 border-b md:shadow-lg items-center relative">
      <img
        src="https://www.freepnglogos.com/uploads/logos-pinterest-icon-black-png-29.png"
        alt=""
        srcset=""
        style="height: 50px"
      />
      <div class="text-2xl font-bold md:py-0 py-4">PENGANGGURANS</div>
      <ul
        class="
          md:px-2
          ml-auto
          md:flex md:space-x-2
          absolute
          md:relative
          top-full
          left-0
          right-0
        "
      >
        <li>
          <a
            href="#"
            class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span><router-link to="/">Home</router-link></span>
          </a>
        </li>
        <li>
          <a
            v-if="this.$store.state.isLogin"
            href="#"
            class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span><router-link to="/orders">Your Orders</router-link></span>
          </a>
        </li>
        <li class="relative parent">
          <a
            v-if="this.$store.state.isLogin"
            href="#"
            class="
              flex
              justify-between
              md:inline-flex
              p-4
              items-center
              hover:bg-gray-50
              space-x-2
            "
          >
            <span>Service</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-current pt-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
          </a>
          <ul
            v-if="this.$store.state.isLogin"
            class="
              child
              transition
              duration-300
              md:absolute
              top-full
              right-0
              md:w-48
              bg-white
              md:shadow-lg md:rounded-b
            "
          >
            <li
              v-for="service in this.$store.state.servicesData"
              :key="service.id"
            >
              <a
                @click.prevent="seeProvider(service.id)"
                href="#"
                class="flex px-4 py-3 hover:bg-red-100"
              >
                {{ service.name }}
              </a>
            </li>
          </ul>
        </li>
        <li v-if="this.$store.state.isLogin">
          <a
            href="#"
            class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span
              ><router-link to="/cart"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  /></svg></router-link
            ></span>
          </a>
        </li>

        <li class="relative parent">
          <a
            v-if="this.$store.state.isLogin"
            href="#"
            class="
              flex
              justify-between
              md:inline-flex
              p-4
              items-center
              space-x-2
            "
          >
            <img
              :src="this.$store.state.dataLogin.imgUser"
              alt=""
              srcset=""
              style="width: 30px"
            />
          </a>
          <ul
            v-if="this.$store.state.isLogin"
            class="
              child
              transition
              duration-300
              md:absolute
              top-full
              right-0
              md:w-48
              bg-white
              md:shadow-lg md:rounded-b
            "
          >
            <li>
              <a
                @click.prevent="logoutHandler"
                href="#"
                class="flex px-4 py-3 hover:bg-red-100"
              >
                Logout
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            v-if="!this.$store.state.isLogin"
            href="#"
            class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span><router-link to="/login">Login</router-link></span>
          </a>
        </li>
      </ul>
      <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    seeProvider(service) {
      this.$store.dispatch("fetchProvider", service);
      this.$router.push(`/products/${service}`);
    },
    logoutHandler() {
      localStorage.clear();
      this.$store.commit("LOGIN_STATUS", false);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .parent:hover .child {
    opacity: 1;
    height: auto;
    overflow: none;
    transform: translateY(0);
  }
  .child {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(-10%);
  }
}
</style>
