<template>
  <!-- SIDEBAR -->
  <aside class="relative bg-sidebar h-screen w-72 hidden sm:block shadow-l">
    <div class="p-6">
      <a
        href="index.html"
        class="
          some-text-color
          text-2xl
          font-semibold
          uppercase
          hover:text-gray-300
        "
      >
        Admin
      </a>
    </div>
    <nav id="sidenav" class="text-white text-base font-semibold">
      <a
        href="index.html"
        class="
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
      <a
        href="blank.html"
        class="
          flex
          items-center
          text-gray-800
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-sticky-note mr-3"></i>
        Coba Login
      </a>
      <a
        href="tables.html"
        class="
          flex
          items-center
          text-gray-800
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-table mr-3"></i>
        Tables
      </a>
      <a
        href="forms.html"
        class="
          flex
          items-center
          text-gray-800
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-align-left mr-3"></i>
        Forms
      </a>
      <a
        href="tabs.html"
        class="
          flex
          items-center
          text-gray-800
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-tablet-alt mr-3"></i>
        Tabbed Content
      </a>
      <a
        href="calendar.html"
        class="
          flex
          items-center
          text-gray-800
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-calendar mr-3"></i>
        Calendar
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
