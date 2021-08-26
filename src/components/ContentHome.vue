<template>
  <div class="p-6 max-w-screen-xl mx-auto">
    <div class="grid grid-cols-5 gap-6">
      <CardContent
        v-for="story in dataStories.stories"
        :key="story.id"
        :story="story"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <button
        v-if="this.$store.state.homeShowStories.currentPage !==  0"
        @click="goBack"
        class="px-3 bg-blue-100 rounded-xl"
      >
        back
      </button>
      <button 
        v-if="this.$store.state.homeShowStories.currentPage !==  this.$store.state.homeShowStories.totalPages"
        @click="goNext" 
        class="px-3 bg-blue-100 rounded-xl">next</button>
    </div>
  </div>
</template>

<script>
import CardContent from "@/components/CardContent";

export default {
  name: "ContentHome",
  components: {
    CardContent,
  },
  methods: {
    goNext() {
      const recentPage = this.$store.state.homeShowStories.currentPage
      console.log(recentPage);
      this.$store.dispatch("getDataStoriesHome", { to: recentPage+1 });
    },

    goBack() {
      const recentPage = this.$store.state.homeShowStories.currentPage
      this.$store.dispatch("getDataStoriesHome", { to: recentPage-1 });
    },
  },
  computed: {
    dataStories() {
      return this.$store.state.homeShowStories;
    },
  },
};
</script>

<style>
#cardImg {
  height: 100%;
}
</style>
