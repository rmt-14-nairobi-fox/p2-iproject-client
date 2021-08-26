<template>
  <div>
    <Navbar />
    <h3>Create Project</h3>
    <form
      style="margin-right: 300px; margin-left: 250px; margin-top: 100px"
      @submit.prevent="onSubmitProject"
    >
      <div class="mb-3">
        <label for="" class="form-label">name</label>
        <input
          type="text"
          class="form-control"
          id="project-name"
          v-model="formAddProject.name"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">description</label>
        <input
          type="textarea"
          class="form-control"
          id="project-desc"
          v-model="formAddProject.description"
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Image</label>
        <input class="form-control" ref="file" name="file" type="file" @change="handleFileUpload()" plain />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Deadline</label>
        <input type="date" class="form-control" id="" v-model="formAddProject.dueDate"/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Position</label>
        <input type="text" class="form-control" id="" v-model="formAddProject.position"/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Job Description</label>
        <input type="text" class="form-control" id="" v-model="formAddProject.jobDesc"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Navbar from "../../components/Navbar.vue";

export default {
  data() {
    return {
      formAddProject: {
        name: "",
        description: "",
        image: "",
        position: "",
        dueDate: "",
        jobDesc: "",
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["addProject"]),
    onSubmitProject(e) {
      e.preventDefault();
      this.addProject(this.formAddProject);
    },
    handleFileUpload() {
			this.formAddProject.image = this.$refs.file.files[0];
		},
  },
};
</script>