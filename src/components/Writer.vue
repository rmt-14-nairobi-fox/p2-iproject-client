<template>
  <div class="max-w-screen-md mx-auto p-6">
    <div>
      <h1 class="text-2xl font-bold">{{ titleStory }}</h1>
      <div class="flex justify-between">
        <p class="bg-gray-100 p-x-2 rounded-full w-1/3 text-center">
          tag : {{ tag }}
        </p>
        <router-link to="read">
          <button
            @click="addText"
            class="
              items-center
              button
              px-2
              border-b-2 border-yellow-300
              rounded
            "
          >
            Post your story
          </button>
        </router-link>
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
    /*onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      },*/
    addText() {
      this.$store.commit("SET_TEXT_INPUT", { text: this.content });
    },
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
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
</script>
