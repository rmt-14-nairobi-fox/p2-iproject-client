<template>
  <div class="col d-flex flex-column align-items-center justify-content-center">
    <h1 class="font-chomsky">The New Roman Times</h1>
    <b-card header="Register" class="w-50">
      <b-form>
        <label for="name">Name</label>
        <b-form-input id="name" class="mb-2"></b-form-input>

        <label for="email">Email</label>
        <b-form-input id="email" class="mb-2"></b-form-input>

        <label for="password">Password</label>
        <b-form-input type="password" id="password" class="mb-2"></b-form-input>

        <label for="profile-image">Profile Image</label>
        <b-form-file
          id="profile-image"
          class="mb-2"
          v-model="file1"
          placeholder="Choose an image or drop it here..."
          drop-placeholder="Drop file here..."
          accept="image/*"
        ></b-form-file>

        <label for="newsPrefId">News Preference</label>
        <b-form-select
          id="newsPrefId"
          v-model="newsPrefId"
          :options="options"
        ></b-form-select>

        <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="dark">Register</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      newsPrefId: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
  },
};
</script>

<style></style>
