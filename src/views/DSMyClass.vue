<template>
  <div class="min-h-screen grid grid-cols-5">
    <!-- Sidebar -->
    <SideBarStudent />
    <div class="col-span-4 flex flex-col">
      <!-- Navbar -->
      <div class="h-32 bg-indigo-500">
        <div class="flex justify-between p-7">
          <h2 class="text-white font-bold text-3xl tracking-wide">
            Dashboard Student
          </h2>
        </div>
      </div>
      <div class="h-auto flex-grow bg-gray-50">
        <div class="p-7 -my-16">
          <!-- My Class -->
          <div class="bg-white h-auto mt-2">
            <div class="p-4 shadow-xl rounded-lg flex flex-col">
              <div class="flex justify-center"></div>
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
                        Class Name
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
                        Teacher Name
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
                      <td class="px-6 py-4 whitespace-nowrap">Class 1</td>
                      <td class="px-6 py-4 whitespace-nowrap">Teacher 1</td>
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
                            @click="myScore(1)"
                          >
                            My Score
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import SideBarStudent from "../components/SideBarStudent.vue";
export default {
  name: "DSMyClass",
  components: {
    SideBarStudent,
  },
  computed: {},
  methods: {
    myScore(id) {
      this.$router.push({
        name: "MyScore",
        params: {
          idClass: id,
        },
      });
    },
  },
};
</script>

<style>
</style>