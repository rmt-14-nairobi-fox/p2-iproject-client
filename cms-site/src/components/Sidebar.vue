<template>
  <!-- SIDEBAR -->
  <aside class="relative bg-sidebar h-screen w-72 hidden sm:block shadow-l">
    <div class="p-6">
      <a
        @click.prevent="homeClick"
        class="
          some-text-color
          text-2xl
          font-semibold
          uppercase
          hover:text-gray-300
          cursor-pointer
        "
      >
        AllComm
      </a>
    </div>
    <nav id="sidenav" class="text-white text-base font-semibold">
      <a
        class="
          cursor-pointer
          flex
          items-center
          active-nav-link
          rounded-bl-lg rounded-tl-lg
          text-gray-800
          py-4
          pl-6
          nav-item
        "
        @click.prevent="homeClick"
      >
        <i class="fas fa-tachometer-alt mr-3"></i>
        All your accommodations
      </a>
    </nav>
  </aside>
  <!-- END SIEDBAR -->
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    homeClick() {
      this.$router
        .push({
          path: "/",
          name: "Home",
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
