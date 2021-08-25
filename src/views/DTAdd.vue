<template>
  <div class="min-h-screen grid grid-cols-5">
    <!-- Sidebar -->
    <SideBarTeacher />
    <div class="col-span-4 flex flex-col">
      <!-- Navbar -->
      <div class="h-32 bg-indigo-500">
        <div class="flex justify-between p-7">
          <h2 class="text-white font-bold text-3xl tracking-wide">
            Dashboard Teacher
          </h2>
        </div>
      </div>
      <div class="h-auto flex-grow bg-gray-50">
        <div class="p-7 -my-16">
          <!-- My Class -->
          <div class="bg-white h-auto mt-2">
            <div class="p-4 shadow-xl rounded-lg">
              <form class="space-y-8" @submit.prevent="addClass">
                <div>
                  <label class="block mb-2">Class Name</label>
                  <input
                    class="
                      border-2 border-gray-200
                      p-3
                      w-full
                      rounded
                      outline-none
                      focus:border-blue-500
                    "
                    type="text"
                    v-model="className"
                  />
                </div>
                <button
                  class="
                    block
                    w-full
                    bg-blue-300
                    p-4
                    rounded
                    text-white
                    font-bold
                    hover:bg-blue-600
                    hover:shadow-2xl
                    transition
                    delay-75
                    duration-300
                    ease-in-out
                  "
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <!-- Class -->
          <!-- Waiting Class -->
          <!-- Score Student -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarTeacher from "../components/SideBarTeacher.vue";
export default {
  name: "DTAdd",
  components: {
    SideBarTeacher,
  },
  data() {
    return {
      className: "",
    };
  },
  computed: {},
  methods: {
    addClass() {
      const payload = {
        name: this.className,
      };
      this.$store.dispatch("addClass", payload);
    },
  },
};
</script>

<style>
</style>