<template>
  <div class="max-w-screen-md mx-auto p-6">
    <div>
      <h1 class="text-2xl font-bold">{{ editData.title }}</h1>
      <div class="flex justify-between">
        <p class="bg-gray-100 p-3 rounded-full w-1/3 text-center">
          tag : {{ editData.tag }}
        </p>
        <div class="flex flex-col space-y-2">
          <router-link to="read">
            <button
              @click="addText(editData.id)"
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
    
    addText(id) {
      this.$store.dispatch("putEdit", {text: this.content, id:id});
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },

    editData(){
    	return this.$store.state.editStory
    }
  },

  created(){
    this.content = this.$store.state.editStory.story_text
  }
};
</script>
