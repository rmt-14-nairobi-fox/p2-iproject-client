<template>
  <div class="flex flex-col">
    <div class="flex flex-col space-y-2">
      <div class="box-content h-64 w-48">
        <img
          :src="story.cover_image_url"
          height="auto"
          id="cardImg"
          class="rounded-md shadow-xl"
        />
      </div>
      <div class="text-xl font-bold hover:font-semilight">
        {{ story.title }}
      </div>
      <div class="text-sm">
        <p class="text-sm">{{ story.sinopsis }}</p>
      </div>
    </div>
    <div>
        <button
          @click="read(story.id)"
          class="
            button
            px-2
          border-b border-yellow-300
          rounded
          text-black
          font-semilight
          text-left
          mt-2
          text-sm
        "
      >
        read more..
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: ["story"],
  methods: {
    read(id){
      this.$store.dispatch("readStory", {id})
    }
  }
};
</script>
