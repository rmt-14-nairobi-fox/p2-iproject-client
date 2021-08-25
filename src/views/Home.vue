<template>
  <div>
    <section
      class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center"
    >
      <div
        class="
          bg-white
          dark:bg-gray-800
          lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg
        "
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:rounded-lg lg:h-full"
            style="
              background-image: url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80');
            "
          ></div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          >
            Pakai jasa para Provider, tingkatkan penghasilan mereka!
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Saling tolong menolong adalah sifat dasar manusia yang tak
            terelakkan, dengan memakai jasa para provider di PENGANGGURANS, anda
            sudah menyelamatkan hidup mereka, dan keperluan anda dapat
            terselesaikan dengan mudah!
          </p>

          <div class="mt-8">
            <a
              href="#"
              class="
                px-5
                py-2
                font-semibold
                text-gray-100
                transition-colors
                duration-200
                transform
                bg-red-500
                rounded-md
                hover:bg-red-800
              "
              >Start Now</a
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="px-10 grid grid-cols-4 gap-4">
        <CardService
          v-for="service in this.$store.state.servicesData"
          :key="service.id"
          :service="service"
        ></CardService>
      </div>
      <!-- <div class="flex flex-row mx-auto">
      </div> -->
    </section>
  </div>
</template>

<script>
import CardService from "../components/CardService.vue";
export default {
  name: "Home",
  components: {
    CardService,
  },
  created() {
    this.$store.dispatch("fetchServices");
    // this.$store.dispatch("fetchUserLogin");
  },
  data() {
    return {
      isSidebarOpen: false,
      isSettingsPanelOpen: false,
      open: false,
      searchOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    SeachControl() {
      this.searchOpen = !this.searchOpen;
    },
    openFalse() {
      this.open = false;
    },
    toggleSettingsPanel() {
      this.isSettingsPanelOpen = !this.isSettingsPanelOpen;
    },
  },
};
</script>
