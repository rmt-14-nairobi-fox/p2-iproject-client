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
              <div class="flex justify-center">
                <h1 class="font-bold text-xl my-3">My Class Name</h1>
              </div>
              <div class="flex mt-10">
                <div class="w-1/2 mx-auto">
                  <form class="space-y-4">
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
                        :value="myScore.score1"
                        readonly
                        disabled
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
                        :value="myScore.score2"
                        readonly
                        disabled
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
                        :value="myScore.score3"
                        readonly
                        disabled
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
                        :value="myScore.score4"
                        readonly
                        disabled
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
                        :value="myScore.score5"
                        readonly
                        disabled
                      />
                    </div>
                  </form>
                </div>
                <div class="text-lg ml-10 w-1/2">
                  <div class="flex flex-col">
                    <div class="p-3 mb-3 space-y-3 bg-purple-600 text-white">
                      <p>Teacher Name : {{ myScore.Class.Teacher.name }}</p>
                      <p>Teacher Email : {{ myScore.Class.Teacher.email }}</p>
                      <p>
                        Teacher Phone : {{ myScore.Class.Teacher.phoneNumber }}
                      </p>
                    </div>
                    <div class="p-3 mb-3 space-y-3 bg-purple-600 text-white">
                      <div>Total Score</div>
                      <hr />
                      <div>{{ myScore.totalScore }}</div>
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
                      <div>Predikat</div>
                      <hr />
                      <div>{{ myScore.predikat }}</div>
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
                      <div>Note</div>
                      <hr />
                      <div>
                        {{ myScore.note }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Class -->
          <!-- Waiting Class -->
          <!-- Score Student -->
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
  name: "DSScore",
  components: {
    SideBarStudent,
    HFooter,
  },
  computed: {
    myScore() {
      return this.$store.state.myScore;
    },
  },
  methods: {},
};
</script>

<style>
</style>