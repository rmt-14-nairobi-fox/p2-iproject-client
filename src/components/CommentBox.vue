<template>
  <div class="d-flex flex-column justify-content-center w-100 mt-2">
    <div class="d-flex flex-row w-100">
      <form @submit.prevent="sendComment" class="w-100">
        <b-form-input
          v-model="commentBox"
          placeholder="Write comment..."
        ></b-form-input>
      </form>
    </div>
    <div class="w-100 overflow-auto" style="max-height: 300px;">
      <div
        v-for="(commentItem, i) in commentList"
        :key="i"
        class="d-flex flex-column align-items-center m-2 overflow-auto"
      >
        <div
          class="d-flex align-items-center w-100"
          :class="
            commentItem.user_imgUrl === profile
              ? 'flex-row-reverse'
              : 'flex-row'
          "
        >
          <img
            class="rounded-circle"
            :src="commentItem.user_imgUrl"
            width="28"
            alt="profile"
          />
          <span class="font-weight-bold mx-2">{{ commentItem.user_name }}</span>
        </div>
        <div
          class="w-100"
          :class="
            commentItem.user_imgUrl === profile ? 'text-right' : 'text-left'
          "
        >
          {{ commentItem.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CommentBox',
  data() {
    return {
      commentBox: '',
      commentList: [],
    };
  },
  props: ['postId'],
  computed: {
    ...mapState(['user_name', 'profile']),
  },
  sockets: {
    // Listen to server event
    comment_response(response) {
      if (response.post_id === this.postId) {
        const { user_name, user_imgUrl, comment } = response;
        const commentData = {
          user_name,
          user_imgUrl,
          comment,
        };

        this.commentList.push(commentData);
      } else if (response === 'error') {
        console.log('Cannot send empty comment');
      }
    },
  },
  methods: {
    sendComment() {
      const payload = {
        access_token: localStorage.access_token,
        user_name: this.user_name,
        user_imgUrl: this.profile,
        post_id: this.postId,
        comment: this.commentBox,
      };
      this.$socket.client.emit('send_comment', payload);
      this.commentBox = '';
    },
    async fetchComment() {
      try {
        const response = await this.$store.dispatch(
          'fetchComment',
          this.postId
        );
        const comments = response.data.map((el) => {
          return {
            user_name: el.User.name,
            user_imgUrl: el.User.imgUrl,
            comment: el.comment,
          };
        });

        this.commentList = comments;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  created() {
    this.fetchComment();
  },
};
</script>

<style></style>
