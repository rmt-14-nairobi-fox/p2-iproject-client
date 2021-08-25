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
            >Sign In</span
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
            >Sign out</span
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
