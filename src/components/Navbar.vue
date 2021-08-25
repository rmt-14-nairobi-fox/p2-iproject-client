<template>
  <nav class="flex items-center justify-between flex-wrap p-6 border-b-2">
    <div class="flex items-center flex-shrink-0 text-indigo-300 mr-6">
      <router-link to="/"
        ><span class="font-semibold text-xl tracking-tight ml-3"
          >Story 4 All</span
        ></router-link
      >
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-white
            mr-4
          "
        >
          Category
        </a>
        <a
          href="#responsive-header"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-white
          "
        >
          Search
        </a>
      </div>
      <div>
        <p
          class="
            inline-block
            text-sm
            px-4
            py-2
            leading-none
            border border-indigo-200
            rounded
            text-indigo-300
            border-white
            hover:border-purple-700 hover:text-teal-500
          "
        >
          <router-link to="addstory">Share Story</router-link>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
