<template>
  <div>
    <div
      class="card"
      style="width: 25rem; margin-top: 120px; margin-left: 45px"
      v-for="applyJobs in allApplyJobs"
      :key="applyJobs.id"
    >
      <div class="card-body">
        <h5 class="card-title">{{ applyJobs.Project.name }}</h5>
        <p class="card-text">{{ applyJobs.User.email }}</p>
        <p class="card-text">{{ applyJobs.User.username }}</p>
        <a><i class="fas fa-check" :value="'Accepted'" @click.prevent="statusJobs({id: applyJobs.id, status: 'accepted'}, $event)" style="color: green; margin-right: 2px">Accepted</i></a>
        <a><i class="fal fa-times" :value="'Rejected'" @click.prevent="statusJobs({id: applyJobs.id, status: 'rejected'})" style="color: red">Rejected</i></a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {},
  computed: mapGetters(["allApplyJobs"]),
  methods: {
    ...mapActions(["fetchApplyJobs", "statusJobs"]),
  },
  created() {
    this.fetchApplyJobs();
  },
};
</script>