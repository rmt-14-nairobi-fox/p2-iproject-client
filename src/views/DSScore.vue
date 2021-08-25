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
                        readonly
                        disabled
                      />
                    </div>
                  </form>
                </div>
                <div class="text-lg ml-10 w-1/2">
                  <div class="flex flex-col">
                    <div class="p-3 mb-3 space-y-3 bg-purple-600 text-white">
                      <p>Teacher Name : Teacher 1</p>
                      <p>Teacher Email : Teacher1@mail.com</p>
                      <p>Teacher Phone : 0182018201</p>
                    </div>
                    <div class="p-3 mb-3 space-y-3 bg-purple-600 text-white">
                      <div>Total Score</div>
                      <hr />
                      <div>100</div>
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
                      <div>A</div>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, culpa doloremque provident pariatur
                        asperiores sit blanditiis error totam laboriosam dolore
                        necessitatibus quasi mollitia, natus repudiandae ullam!
                        Nam velit provident accusamus.
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarStudent from "../components/SideBarStudent.vue";
export default {
  name: "DSScore",
  components: {
    SideBarStudent,
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>