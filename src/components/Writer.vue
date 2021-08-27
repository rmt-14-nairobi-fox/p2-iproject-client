<template>
  <div class="max-w-screen-md mx-auto p-6">
    <div>
      <h1 class="text-2xl font-bold">{{ titleStory }}</h1>
      <div class="flex justify-between">
        <p class="bg-gray-100 p-3 rounded-full w-1/3 text-center">
          tag : {{ tag }}
        </p>
        <div class="flex flex-col space-y-2">
          <button
              @click="backStep"
              class="
                items-center
                button
                px-2
                border-b-2 border-yellow-300
                rounded
                text-right
              "
            >
              Back
          </button>
          <router-link to="read">
            <button
              @click="addText"
              class="
                items-center
                button
                px-2
                border-b-2 border-yellow-300
                rounded
                text-right
              "
            >
              Post your story
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="h-screen mt-6">
      <quill-editor
        class="h-full"
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
      />
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Swal from 'sweetalert2';

export default {

  name: "Writer",
  data() {
    return {
      content: "<p>Write your Story</p>",
      editorOption: {
        theme: "snow",
      },
    };
  },
  methods: {

    addText() {
      
      Swal.fire({
        title : "Wait a minute",
        text : "....",
        icon : 'info'
      })    
      this.$store.commit("SET_TEXT_INPUT", { text: this.content });
      this.$store.dispatch("uploadStory");

    },
    backStep(){
      router.go(-1)
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },

    titleStory() {
      return this.$store.state.userInput.title;
    },

    tag() {
      return this.$store.state.userInput.tag;
    },
  }
};
</script>
