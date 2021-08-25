<template>
  <section>
    <div class="min-h-screen flex flex-col">
      <div class="flex-grow flex flex-col">
        <div class="min-h-screen">
          <div class="hero">
            <div class="hero__content">
              <h1 class="text-9xl mb-5">RAPOOT</h1>
              <p class="text-3xl mb-5">
                A website to help teachers assign score to their students and
                make easier for students to see their score
              </p>
              <div class="flex">
                <button
                  @click="loginTeacher"
                  class="p-7 text-2xl bg-indigo-700 rounded-xl mr-3"
                >
                  Login as Teacher
                </button>
                <button
                  @click="loginStudent"
                  class="p-7 text-2xl bg-indigo-800 rounded-xl ml-3"
                >
                  Login as Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    loginTeacher() {
      this.$router.push({ name: "LoginTeacher" });
    },
    loginStudent() {},
  },
};
</script>

   <style>
:root {
  --red: #f9032f;
  --black: #000;
  --white: #fff;
}

.hero {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
    url("https://wallpaperaccess.com/full/697849.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.hero__content {
  color: var(--white);
  padding: 3rem 1rem;
  line-height: 1;
}
</style>
