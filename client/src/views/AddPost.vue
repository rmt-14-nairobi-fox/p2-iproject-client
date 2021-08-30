<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <section id="login" class="bg-white p-10 rounded-lg shadow w-6/12 h-3/6">
      <h2 class="text-5xl font-bold mb-1 text-center text-blue-400">
        Add your post here
      </h2>
      <p class="text-lg font-light mb-4 text-center text-gray-400"></p>
      <form action="" class="space-y-5" @submit.prevent="sendAddPostData">
        <div>
          <label for="animalName" class="block mb-2 font-bold text-gray-600"
            >Name</label
          >
          <input
            type="text"
            id="animalName"
            name="name"
            placeholder="Your Animal Name"
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
            v-model="postForm.name"
          />
        </div>
        <div>
          <label for="animalType" class="block mb-2 font-bold text-gray-600"
            >Category</label
          >
          <input
            type="text"
            id="animalType"
            name="name"
            placeholder="Your Animal Spesies"
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
            v-model="postForm.type"
          />
        </div>
        <div>
          <label for="animalImg" class="block mb-2 font-bold text-gray-600"
            >Your Animal Photos url</label
          >
          <input
            type="text"
            id="animalImg"
            name="name"
            placeholder="Your Animal Photo Link"
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
            v-model="postForm.imageUrl"
          />
        </div>
        <button
          class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
        >
          Add Post
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddPost",
  data() {
    return {
      postForm: {
        name: "",
        type: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    async sendAddPostData() {
      await this.addPost(this.postForm);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
