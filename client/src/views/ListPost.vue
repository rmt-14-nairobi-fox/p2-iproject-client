<template>
  <section class="w-full lg:w-3/4 flex flex-row flex-wrap">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10">
      <!-- Card component -->
      <post-card v-for="post in posts" :key="post.id" :post="post"></post-card>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostCard from "../components/PostCard.vue";
export default {
  components: { PostCard },
  name: "ListPost",
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style></style>
