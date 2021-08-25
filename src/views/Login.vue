<template>
  <div class="col d-flex align-items-center justify-content-center">
    <b-card header="Login" class="w-50">
      <b-form>
        <label for="email">Email</label>
        <b-form-input
          id="email"
          class="mb-2"
          placeholder="type your email"
        ></b-form-input>

        <label for="password">Password</label>
        <b-form-input
          id="password"
          class="mb-3"
          placeholder="type your password"
        ></b-form-input>
        <div class="d-flex justify-content-center">
          <b-button type="submit" variant="dark">Login</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style></style>
