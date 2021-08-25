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
          <!-- Class -->
          <div class="bg-white h-auto mt-2">
            <div class="p-4 shadow-xl rounded-lg flex flex-col">
              <div class="flex justify-center">
                <h1 class="font-bold text-xl my-3">My Class Name</h1>
              </div>
              <button
                @click="studentRegister(1)"
                class="shadow-xl p-5 bg-blue-500 text-white w-56"
              >
                See Student Register
              </button>
              <div>
                <table class="min-w-full my-7">
                  <thead class="bg-indigo-50">
                    <tr>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        Student Name
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        Predikat
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">1</td>
                      <td class="px-6 py-4 whitespace-nowrap">Student 1</td>
                      <td class="px-6 py-4 whitespace-nowrap">B</td>
                      <td class="px-6 py-4 whitespace-nowrap flex">
                        <div class="p-3">
                          <button
                            class="
                              shadow-xl
                              font-bold
                              p-4
                              w-40
                              bg-green-500
                              text-white
                            "
                            @click="score(1, 2)"
                          >
                            Score
                          </button>
                        </div>
                        <div class="p-3">
                          <button
                            class="
                              shadow-xl
                              font-bold
                              p-4
                              w-40
                              bg-red-500
                              text-white
                            "
                          >
                            Delete Student
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
  name: "DTClass",
  components: {
    SideBarTeacher,
  },
  computed: {},
  methods: {
    studentRegister(id) {
      this.$router.push({
        name: "WaitingClass",
        params: {
          idClass: id,
        },
      });
    },
    score(idClass, idStudent) {
      this.$router.push({
        name: "Score",
        params: {
          idClass,
          idStudent,
        },
      });
    },
  },
};
</script>

<style>
</style>