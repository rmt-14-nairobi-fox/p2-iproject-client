<template>
  <section id="section__login">
    <div
      class="min-h-screen bg-gray-100 flex items-center justify-center sm:py-12"
    >
      <div
        class="
          bg-white
          p-16
          border border-indigo-400
          rounded-xl
          shadow-2xl
          w-1/2
        "
      >
        <h2 class="text-3xl font-bold text-center">Login as Student</h2>
        <p class="mb-10 mt-2 flex justify-center">
          want to login as Teacher ?<button
            @click="pageLoginTeacher"
            class="text-blue-500"
          >
            click here
          </button>
        </p>

        <form class="space-y-8" @submit.prevent="loginStudent">
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
              v-model="email"
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
              v-model="password"
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
            Login
          </button>
        </form>
        <p class="mt-3 flex justify-center">
          Dont have account ?<button
            @click="pageRegisterStudent"
            class="text-blue-500"
          >
            Register Here
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginStudent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    pageLoginTeacher() {
      this.$router.push({ name: "LoginTeacher" });
    },
    pageRegisterStudent() {
      this.$router.push({ name: "RegisterStudent" });
    },
    loginStudent() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginStudent", payload);
    },
  },
};
</script>

<style>
</style>