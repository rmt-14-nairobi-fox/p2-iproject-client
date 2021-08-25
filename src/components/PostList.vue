<template>
  <div class="col-3 custom-p">
    <div
      class="bg-light position-relative custom-rounded post-height p-3 overflow-auto"
    >
      <div class="row">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @editPost="fillForm"
        />
      </div>
      <button
        v-b-modal.modal-center
        class="create-post-btn rounded-circle d-flex align-items-center justify-content-center bg-dark text-light"
      >
        <b-icon-plus-square-fill />
      </button>
      <b-modal
        id="modal-center"
        centered
        hide-footer
        title="Post"
        @hidden="resetModal"
      >
        <form @submit.stop.prevent="createPostForm">
          <b-form-group label="Title" label-for="title-input">
            <b-form-input
              id="title-input"
              v-model="form.title"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Message" label-for="message-input">
            <b-form-input
              id="message-input"
              v-model="form.message"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Saved News" label-for="news-input">
            <b-form-select
              id="news-input"
              v-model="form.savedNews_id"
              :options="savedNewsOptions"
              required
            ></b-form-select>
          </b-form-group>
          <div class="d-flex justify-content-end">
            <b-button type="submit" variant="dark">Create</b-button>
          </div>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostCard from './PostCard.vue';
export default {
  name: 'PostList',
  data() {
    return {
      form: {
        title: '',
        message: '',
        savedNews_id: null,
      },
      savedNewsOptions: [],
      post_id: null,
      isEdit: false,
    };
  },
  props: ['posts'],
  computed: {
    ...mapState(['savednews']),
  },
  watch: {
    savednews(newSavedNews) {
      if (newSavedNews.length) {
        this.savedNewsOptions = newSavedNews.map((saved) => {
          return {
            value: saved.id,
            text: saved.title,
          };
        });

        this.savedNewsOptions.unshift({
          value: null,
          text: 'Select saved news',
          disabled: true,
        });
      }
    },
  },
  components: {
    PostCard,
  },
  methods: {
    fetchSavedNews() {
      this.$store.dispatch('fetchSavedNews');
    },
    createPostForm() {
      if (this.isEdit) {
        this.$store.dispatch('editPostForm', {
          form: this.form,
          post_id: this.post_id,
        });
      } else {
        this.$store.dispatch('createPostForm', this.form);
      }
      this.$bvModal.hide('modal-center');
    },
    fillForm(payload) {
      this.form.title = payload.title;
      this.form.message = payload.message;
      this.form.savedNews_id = payload.savedNews_id;
      this.post_id = payload.id;
      this.isEdit = true;
    },
    resetModal() {
      Object.keys(this.form).forEach((key) => {
        this.isEdit = false;
        this.post_id = null;
        if (key === 'savedNews_id') {
          this.form[key] = null;
        } else {
          this.form[key] = '';
        }
      });
    },
  },
  created() {
    this.fetchSavedNews();
  },
};
</script>

<style>
.create-post-btn {
  position: fixed;
  bottom: 125.8px;
  right: 32px;
  width: 60px;
  height: 60px;
  border: none;
}
</style>
