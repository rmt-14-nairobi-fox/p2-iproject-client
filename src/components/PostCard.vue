<template>
  <div class="col-12">
    <div class="d-flex flex-column align-items-center p-2 my-3">
      <div class="d-flex align-items-center w-100">
        <!-- Pic and nam -->
        <img
          :src="post.User ? post.User.imgUrl : profile"
          class="rounded-circle"
          width="36"
          alt="user pic"
        />
        <span class="font-weight-bold ml-3">{{
          post.User ? post.User.name : user_name
        }}</span>
        <div
          v-if="$route.name === 'MySpace'"
          class="flex-grow-1 d-flex justify-content-end"
        >
          <!-- <button @click="editPost" v-b-modal.modal-center class="btn">
            <b-icon-three-dots-vertical />
          </button> -->
          <b-dropdown variant="transparent" no-caret>
            <template #button-content>
              <b-icon-three-dots-vertical />
            </template>
            <b-dropdown-item
              @click.prevent="editPost"
              v-b-modal.modal-center
              href="#"
              >Edit</b-dropdown-item
            >
            <b-dropdown-item @click.prevent="deletePost" href="#"
              >Delete</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
      <!-- News pic and title -->
      <div
        class="post-header custom-rounded-top mt-3 d-flex flex-column justify-content-end"
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
          <a @click.prevent="toggleComment" href="#" class="h5 text-dark">
            <b-icon-chat />
            <!-- Comment count -->
            <span> 35</span>
          </a>
        </div>
        <CommentBox v-if="showComment" />
      </div>
    </div>
    <div class="w-100 border-bottom" style="height: 1px;"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CommentBox from './CommentBox.vue';
export default {
  name: 'PostCard',
  data() {
    return {
      showComment: false,
    };
  },
  props: ['post'],
  computed: {
    ...mapState(['user_name', 'profile']),
  },
  components: {
    CommentBox,
  },
  methods: {
    toggleComment() {
      this.showComment = !this.showComment;
    },
    editPost() {
      const payload = { ...this.post };
      delete payload.user_id;
      delete payload.createdAt;
      delete payload.updatedAt;
      delete payload.SavedNew;
      this.$emit('editPost', payload);
    },
    deletePost() {
      this.$store.dispatch('deletePost', this.post.id);
    },
  },
};
</script>

<style></style>
