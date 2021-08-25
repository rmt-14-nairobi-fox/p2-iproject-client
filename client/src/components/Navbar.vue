<template>
  <nav class="flex items-center justify-between py-2 border-b">
    <span class="px-2 lg:px-0 uppercase font-bold text-blue-500">
      <router-link class="no-underline" to="/">
        <span
          class="cursor-pointer font-semibold hover:text-blue-900 text-blue-500"
          >Logo</span
        >
      </router-link>
    </span>

    <ul class="inline-flex items-center">
      <li class="px-2">
        <router-link class="no-underline" to="/login">
          <span
            class="
              cursor-pointer
              font-semibold
              hover:text-blue-900
              text-blue-500
            "
            v-show="!isLoggedin"
            >Sign In</span
          >
        </router-link>
      </li>

      <li class="px-2">
        <a class="no-underline" href="">
          <span
            class="
              cursor-pointer
              font-semibold
              hover:text-blue-900
              text-blue-500
            "
            v-show="isLoggedin"
            @click.prevent="findNearby"
            >Nearby</span
          >
        </a>
      </li>

      <li class="px-2">
        <router-link class="no-underline" to="/add-post">
          <span
            class="
              cursor-pointer
              font-semibold
              hover:text-blue-900
              text-blue-500
            "
            v-show="isLoggedin"
            >Add Post</span
          >
        </router-link>
      </li>

      <li class="px-2">
        <router-link class="no-underline" to="/page-chat">
          <span
            class="
              cursor-pointer
              font-semibold
              hover:text-blue-900
              text-blue-500
            "
            v-show="isLoggedin"
            >Chats</span
          >
        </router-link>
      </li>

      <li class="px-2">
        <router-link class="no-underline" to="/">
          <span
            class="
              cursor-pointer
              font-semibold
              hover:text-blue-900
              text-blue-500
            "
            v-show="isLoggedin"
            @click.prevent="logoutHandler"
            >Sign out</span
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLoggedin", "userLocation"]),
  },
  methods: {
    ...mapMutations({ toogleStateLogin: "TOGGLE_STATE_LOGIN" }),
    ...mapActions(["fetchNearbyposts"]),
    logoutHandler() {
      localStorage.clear();
      this.toogleStateLogin();
      this.$router.push({ name: "Home" }).catch(() => {});
    },
    findNearby() {
      this.fetchNearbyposts(this.userLocation);
    },
  },
};
</script>

<style></style>
