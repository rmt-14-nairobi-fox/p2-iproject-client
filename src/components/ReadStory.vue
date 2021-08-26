<template>
  <div class="flex flex-col">
    <div class="flex justify-center gap-2 max-h-screen space-x-6">
      <div class="p-6 flex flex-col bg-gray-50 rounded mt-4 shadow w-3/5">
          <div class="h-screen">
          <h1 class="text-xl text-center">{{story.title}}</h1>
          <p class="text-sm text-center font-semilight">Writen by : Your Full name</p>
          <quill-editor
          id="shownText"
          class="mt-4"
          ref="myQuillEditor"
          v-model="content"
          :options="editorOption"
        />
        </div>
        <div class="max-h-screen border-1"></div>
      </div>
      <div class="sticky top-0 mt-4">
        <button @click="addLike(story.id)" class="bg-yellow-400 rounded px-6 py-2">+ like</button>
        <br>
        <span class="text-sm">total likes : {{story.StoriesLikes.length}}</span>
      </div>
    </div>
    <div class="mx-auto bg-white rounded">
      <div class="flex flex-col">
        <div>
          <CommentList :story="story"/>
        </div>
        <div>
          <AddComment :story="story" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import AddComment from "./AddComment"
  import CommentList from "./CommentList"

  export default{
    name : "Read",
    components : {
      CommentList,
      AddComment,
    },
    data(){
      return {
        content: `${this.$store.state.readStory.story_text}`,
        editorOption: {
          theme: "bubble",
          readOnly: true
        },
      }
    },
    methods : {
      addLike(id){
        this.$store.dispatch("addLikePost", id)
      }
    },
    computed : {
      story(){
        return this.$store.state.readStory
      },
      editor() {
        return this.$refs.myQuillEditor.quill;
      }
    },
    mounted() {
      console.log("this is current quill instance object", this.editor);
    },
  }
</script>

<style>
#shownText{
  pointer-events: none;
  }
</style>