<template>
  <section id="">
    <div
      class="min-h-screen bg-gray-100 flex items-center justify-center sm:py-12"
    >
      <div
        class="
          bg-white
          p-16
          rounded-xl
          border border-indigo-400
          shadow-2xl
          w-1/2
        "
      >
        <h2 class="text-3xl font-bold mb-10 text-center">
          Register as Teacher
        </h2>
        <form class="space-y-8">
          <div>
            <label class="block mb-2" for="email">Email</label>
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
              id="email"
              placeholder="your@mail.com"
            />
          </div>
          <div>
            <label class="block mb-2" for="password">Password</label>
            <input
              class="
                border-2 border-gray-200
                p-3
                w-full
                rounded
                outline-none
                focus:border-blue-500
              "
              type="password"
              id="password"
            />
          </div>
          <div>
            <label class="block mb-2" for="email">Name</label>
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
            />
          </div>
          <div>
            <label class="block mb-2" for="email">Phone Number</label>
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
            Register
          </button>
        </form>
        <p class="mt-3 flex justify-center">
          Have account ?<button @click="pageLoginTeacher" class="text-blue-500">
            Login Here
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterTeacher",
  methods: {
    pageLoginTeacher() {
      this.$router.push({ name: "LoginTeacher" });
    },
  },
};
</script>

<style>
</style>