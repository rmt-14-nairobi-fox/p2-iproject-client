<template>
  <div class="col-12">
    <div class="d-flex flex-column align-items-center p-2 my-3">
      <div class="d-flex align-items-center w-100">
        <!-- Pic and nam -->
        <img
          :src="post.User.imgUrl"
          class="rounded-circle"
          width="36"
          alt="user pic"
        />
        <span class="font-weight-bold ml-3">{{ post.User.name }}</span>
      </div>
      <!-- News pic and title -->
      <div
        class="image-header custom-rounded-top mt-3 d-flex flex-column justify-content-end"
        :style="`background-image: url(${post.SavedNew.image});`"
      >
        <div class="text-light" style="background-color: #00000080;">
          {{ post.SavedNew.title }}
        </div>
      </div>
      <span class="font-weight-bold align-self-start">{{ post.title }}</span>
      <p style="text-align: justify;" class="align-self-start">
        {{ post.message }}
      </p>
      <div class="align-self-start d-flex flex-column">
        <!-- Comment Button -->
        <div>
          <a @click.prevent="toggleComment" href="#" class="h4 text-dark">
            <b-icon-chat />
          </a>
          <!-- Comment count -->
          <span> 35</span>
        </div>
        <CommentBox v-if="showComment" />
      </div>
    </div>
    <div class="w-100 border-bottom" style="height: 1px;"></div>
  </div>
</template>

<script>
import CommentBox from './CommentBox.vue';
export default {
  name: 'PostCard',
  data() {
    return {
      showComment: false,
    };
  },
  props: ['post'],
  components: {
    CommentBox,
  },
  methods: {
    toggleComment() {
      this.showComment = !this.showComment;
    },
  },
};
</script>

<style></style>
