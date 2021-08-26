<template>
  <div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6 mx-80 flex-row">
        All your Bookmarks
      </h1>
      <div class="grid grid-cols-3 max-w-full gap-4">
        <bookmarks-card
          v-for="bookmark in bookmarks"
          :key="bookmark + bookmark.id"
          :accommodation="bookmark.Accommodation"
          :bookmark="bookmark"
        ></bookmarks-card>
      </div>
    </main>
  </div>
</template>

<script>
import BookmarksCard from "@/components/BookmarksCard.vue";
export default {
  name: "Bookmark",
  components: {
    BookmarksCard,
  },
  created() {
    this.$store.dispatch("getAllBookmark");
  },
  computed: {
    bookmarks() {
      return this.$store.state.bookmarks;
    },
  },
};
</script>

<style></style>
