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
        @click="goBack"
        v-if="dataStories.currentPage !== 0"
        class="px-3 bg-blue-100 rounded-xl"
      >
        back
      </button>
      <button @click="goNext" class="px-3 bg-blue-100 rounded-xl">next</button>
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
      this.$store.dispatch("getDataStoriesHome", { to: 1 });
    },

    goBack() {
      this.$store.dispatch("getDataStoriesHome", { to: 0 });
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
