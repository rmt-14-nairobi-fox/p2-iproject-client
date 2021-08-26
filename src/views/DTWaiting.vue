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
          <!-- Waiting Class -->
          <div class="bg-white h-auto mt-2">
            <div class="p-4 shadow-xl rounded-lg flex flex-col">
              <div class="flex justify-center">
                <h1 class="font-bold text-xl my-3">My Class Name</h1>
              </div>
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
                        Email
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
                    <tr v-for="(ws, i) in waitingStudents" :key="'ws' + ws.id">
                      <td class="px-6 py-4 whitespace-nowrap">{{ i + 1 }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ ws.Student.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ ws.Student.email }}
                      </td>
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
                            @click="accept(ws.ClassId, ws.StudentId)"
                          >
                            Accept
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
                            @click="reject(ws.ClassId, ws.StudentId)"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Score Student -->
          <router-view />
          <HFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarTeacher from "../components/SideBarTeacher.vue";
import Swal from "sweetalert2";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "DTWaiting",
  components: {
    SideBarTeacher,
    HFooter,
  },
  computed: {
    waitingStudents() {
      return this.$store.state.waitingStudents;
    },
  },
  methods: {
    accept(idClass, idStudent) {
      const payload = {
        idClass,
        idStudent,
      };
      Swal.fire({
        title: "Are you sure?",
        text: "Want to Accept this student ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Accept it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Accepted!", "This Student join your class", "success");
          this.$store.dispatch("accept", payload);
        }
      });
    },
    reject(idClass, idStudent) {
      const payload = {
        idClass,
        idStudent,
      };
      Swal.fire({
        title: "Are you sure?",
        text: "Want to reject this student ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, rejectit!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Reject!",
            "This student rejected from your class",
            "success"
          );
          this.$store.dispatch("reject", payload);
        }
      });
    },
  },
};
</script>

<style>
</style>