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
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(wc, i) in waitingClassess" :key="'wc' + wc.id">
                      <td class="px-6 py-4 whitespace-nowrap">{{ i + 1 }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ wc.Class.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ wc.Class.Teacher.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap flex">
                        <div class="p-3">
                          <span
                            class="
                              p-3
                              inline-flex
                              leading-5
                              font-semibold
                              rounded-full
                              bg-yellow-400
                              text-green-800
                            "
                          >
                            Waiting
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <router-view />
          <HFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarStudent from "../components/SideBarStudent.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "DSWaiting",
  components: {
    SideBarStudent,
    HFooter,
  },
  computed: {
    waitingClassess() {
      return this.$store.state.waitingClassess;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("getClassWaiting");
  },
};
</script>

<style>
</style>