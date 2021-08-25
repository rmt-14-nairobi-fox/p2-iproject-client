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
          <!-- Score Student -->
          <div class="bg-white h-auto mt-2">
            <div class="p-4 shadow-xl rounded-lg flex flex-col">
              <div class="flex justify-center">
                <h1 class="font-bold text-xl my-3">My Class Name</h1>
              </div>
              <div class="flex mt-10">
                <div class="w-1/2 mx-auto">
                  <form class="space-y-4" @submit.prevent="addScore">
                    <div>
                      <label class="block mb-2" for="email">Score 1</label>
                      <input
                        class="
                          border-2 border-gray-200
                          p-2
                          w-full
                          rounded
                          outline-none
                          focus:border-blue-500
                        "
                        type="number"
                        v-model="score1"
                      />
                    </div>
                    <div>
                      <label class="block mb-2" for="email">Score 2</label>
                      <input
                        class="
                          border-2 border-gray-200
                          p-2
                          w-full
                          rounded
                          outline-none
                          focus:border-blue-500
                        "
                        type="number"
                        v-model="score2"
                      />
                    </div>
                    <div>
                      <label class="block mb-2" for="email">Score 3</label>
                      <input
                        class="
                          border-2 border-gray-200
                          p-2
                          w-full
                          rounded
                          outline-none
                          focus:border-blue-500
                        "
                        type="number"
                        v-model="score3"
                      />
                    </div>
                    <div>
                      <label class="block mb-2" for="email">Score 4</label>
                      <input
                        class="
                          border-2 border-gray-200
                          p-2
                          w-full
                          rounded
                          outline-none
                          focus:border-blue-500
                        "
                        type="number"
                        v-model="score4"
                      />
                    </div>
                    <div>
                      <label class="block mb-2" for="email">Score 5</label>
                      <input
                        class="
                          border-2 border-gray-200
                          p-2
                          w-full
                          rounded
                          outline-none
                          focus:border-blue-500
                        "
                        type="number"
                        v-model="score5"
                      />
                    </div>
                    <div>
                      <label class="block mb-2" for="email">Note</label>
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
                        v-model="note"
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
                      Confirm
                    </button>
                  </form>
                </div>
                <div class="text-lg ml-10 w-1/2">
                  <div class="flex flex-col">
                    <div class="p-3 mb-3 space-y-3 bg-purple-600 text-white">
                      <p>Student Name : {{ oneStudent.Student.name }}</p>
                      <p>Student Email : {{ oneStudent.Student.email }}</p>
                      <p>
                        Student Phone : {{ oneStudent.Student.phoneNumber }}
                      </p>
                    </div>
                    <div class="p-3 mb-3 space-y-3 bg-purple-600 text-white">
                      Total Score : {{ oneStudent.totalScore }}
                    </div>
                    <div
                      class="
                        p-3
                        mb-3
                        space-y-3
                        bg-purple-600
                        text-white
                        flex flex-col
                      "
                    >
                      Predikat : {{ oneStudent.predikat }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarTeacher from "../components/SideBarTeacher.vue";
export default {
  name: "DTScore",
  data() {
    return {
      idClass: this.$store.state.oneStudent.ClassId,
      idStudent: this.$store.state.oneStudent.StudentId,
      score1: this.$store.state.oneStudent.score1,
      score2: this.$store.state.oneStudent.score2,
      score3: this.$store.state.oneStudent.score3,
      score4: this.$store.state.oneStudent.score4,
      score5: this.$store.state.oneStudent.score5,
      note: this.$store.state.oneStudent.note,
    };
  },
  components: {
    SideBarTeacher,
  },
  computed: {
    oneStudent() {
      return this.$store.state.oneStudent;
    },
  },
  methods: {
    addScore() {
      const payload = {
        idClass: this.idClass,
        idStudent: this.idStudent,
        score1: this.score1,
        score2: this.score2,
        score3: this.score3,
        score4: this.score4,
        score5: this.score5,
        note: this.note,
      };
      this.$store.dispatch("updateScore", payload);
    },
  },
};
</script>

<style>
</style>