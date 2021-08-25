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
              <div class="p-4 grid grid-cols-3 gap-4">
                <button
                  v-for="teacherClass in teacherClassess"
                  :key="'teacherClass' + teacherClass.id"
                  class="
                    border border-indigo-500
                    shadow-md
                    mb-5
                    h-32
                    flex
                    justify-center
                    items-center
                  "
                  @click="myClass(teacherClass.id)"
                >
                  {{ teacherClass.name }}
                </button>
              </div>
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
  name: "DTMyClass",
  components: {
    SideBarTeacher,
  },
  computed: {
    teacherClassess() {
      return this.$store.state.teacherClassess;
    },
  },
  methods: {
    myClass(id) {
      const payload = { id };
      this.$store.dispatch("getStudentClass", payload);
    },
  },
  created() {
    this.$store.dispatch("getClassTeacher");
  },
};
</script>

<style>
</style>