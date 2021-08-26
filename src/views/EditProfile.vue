<template>
  <div class="col d-flex flex-column align-items-center justify-content-center">
    <h1 class="font-chomsky">The New Roman Times</h1>
    <b-card header="Edit Profile" class="w-50">
      <b-form @submit.prevent="editProfile" ref="edit-profile-form">
        <label for="name">Name</label>
        <b-form-input
          v-model="username"
          id="name"
          name="name"
          class="mb-2"
        ></b-form-input>

        <label for="profile-image">Profile Image</label>
        <b-form-file
          id="profile-image"
          name="profile-image"
          class="mb-2"
          placeholder="Choose an image or drop it here..."
          drop-placeholder="Drop file here..."
          accept="image/*"
        ></b-form-file>

        <div class="d-flex justify-content-center mt-3">
          <b-button class="mx-2" type="submit" variant="dark">Edit</b-button>
          <b-button @click="cancel" class="mx-2" type="button" variant="danger"
            >Cancel</b-button
          >
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'EditProfile',
  data() {
    return {
      username: '',
    };
  },
  computed: {
    ...mapState(['user_name']),
  },
  methods: {
    editProfile() {
      const form = new FormData(this.$refs['edit-profile-form']);

      this.$store.dispatch('editProfileAction', form);
    },
    setUsername() {
      this.username = this.user_name;
    },
    cancel() {
      this.$router.go(-1);
    },
  },
  created() {
    this.setUsername();
  },
};
</script>

<style></style>
