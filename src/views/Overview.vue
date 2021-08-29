<template>
  <div class="overview">
    <section
      class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center"
    >
      <div
        class="
          bg-white
          dark:bg-gray-800
          lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg
        "
      >
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:rounded-lg lg:h-full"
            style="
              background-image: url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80');
            "
          ></div>
        </div>

        <div class="max-w-xl px-6 py-12 bg-red-100 lg:max-w-5xl lg:w-1/2">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          >
            Permudah hidup anda dengan menggunakan jasa para Provider,
            tingkatkan penghasilan mereka!
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Saling tolong menolong adalah sifat dasar manusia yang wajib
            dilaksanakan, dengan memakai jasa para provider di PENGANGGURANS,
            anda sudah menyelamatkan hidup mereka, dan keperluan anda dapat
            terselesaikan dengan mudah!
          </p>

          <div class="mt-8">
            <a
              href="#"
              class="
                px-5
                py-2
                font-semibold
                text-gray-100
                transition-colors
                duration-200
                transform
                bg-red-500
                rounded-md
                hover:bg-red-800
              "
            >
              <router-link
                to="/services"
                active-class="active"
                tag="button"
                exact
                class="side-btn"
              >
                <div class="link-container">Start Now</div>
              </router-link></a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: rgb(167, 167, 167);
}
</style>
