<template>
  <div>
  <Navbar />
  <h3>Add Position</h3>
    <form style="margin-right: 300px; margin-left: 250px; margin-top: 100px">
      <div class="mb-3">
        <label for="" class="form-label">name</label>
        <input type="text" class="form-control" id="project-name" disabled/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">description</label>
        <input type="textarea" class="form-control" id="" disabled/>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label"
          >Image</label
        >
        <input class="form-control" type="file" id="formFile" disabled/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Deadline</label>
        <input type="date" class="form-control" id="" disabled/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Position</label>
        <input type="text" class="form-control" id="" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Job Description</label>
        <input type="text" class="form-control" id="" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import Navbar from '../../components/Navbar.vue';

export default {
  data() {

  },
  components: {
      Navbar
  }
};
</script>