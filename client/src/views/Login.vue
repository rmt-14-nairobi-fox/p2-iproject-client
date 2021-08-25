<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <section id="login" class="bg-white p-10 rounded-lg shadow w-6/12 h-3/6">
      <h2 class="text-5xl font-bold mb-1 text-center text-blue-400">Sign in</h2>
      <p class="text-lg font-light mb-4 text-center text-gray-400">
        Sign in to access your account
      </p>
      <form action="" class="space-y-5" @submit.prevent="sendLoginData">
        <div>
          <label for="emailLogin" class="block mb-2 font-bold text-gray-600"
            >Email Address</label
          >
          <input
            type="email"
            id="emailLogin"
            placeholder="you@company.com"
            class="
              w-full
              border-2
              p-3
              rounded
              border-gray-200
              shadow
              outline-none
              focus:border-blue-500
            "
          />
        </div>
        <div>
          <label for="passwordLogin" class="block mb-2 font-bold text-gray-600"
            >Password</label
          >
          <input
            type="text"
            id="passwordLogin"
            name="name"
            placeholder="Your Password"
            class="
              w-full
              border-2
              p-3
              rounded
              border-gray-200
              shadow
              outline-none
              focus:border-blue-500
            "
          />
        </div>
        <button
          class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
        >
          Sign In
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
