<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col-sm-4 mt-1" v-for="job in allJobs" :key="job.id">
        <div
          class="card"
          style="width: 15rem; margin-top: 260px; margin-left: 255px"
        >
          <img
            class="card-img-top"
            :src="job.imageURL"
            alt="..."
            height="170"
            width="140"
          />
          <div class="card-body">
            <h5 class="card-title">{{ job.name }}</h5>
            <p class="card-text">
              {{ job.position }}
            </p>
            <a
              :href="'/detail/' + job.id"
              :name="job.name"
              data-bs-toggle="collapse"
              class="btn btn-primary"
              style="margin-right: 1.8px"
              @click.prevent="onClickLink(job.id)"
              >Detail</a
            >
            <a
              href="#"
              data-bs-toggle="collapse"
              class="btn btn-primary"
              v-if="access_role.role === 'recruiter'"
              style="margin-right: 1.8px"
              >Add Position</a
            >
            <a
              href="#"
              data-bs-toggle="collapse"
              class="btn btn-primary"
              v-if="access_role.role === 'employee'"
              style="margin-right: 1.8px"
              @click.prevent="onApplyJobs(job.id)"
              >Apply</a
            >
            <a
              @click="goToChatroom"
              data-bs-toggle="collapse"
              class="btn btn-primary"
              style="margin-right: 1.8px"
              >Chat</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import DetailPage from '../views/Recruiter/DetailProject.vue';
export default {
  data() {
    return {
      access_role: JSON.parse(
        atob(localStorage.getItem("token").split(".")[1])
      ),
    };
  },
  components: {
    // DetailPage
  },
  name: "Home",
  methods: {
    ...mapActions(["fetchJobs", "createdApplyJobs"]),
    onClickLink(id) {
      // console.log(id)
      this.$router.push({ name: "DetailPage", params: { id: id } });
    },
    onApplyJobs(id) {
      this.createdApplyJobs(id);
    },
    goToChatroom() {
      this.$router.push('/chatrooms'); 
    }
  },
  computed: mapGetters(["allJobs"]),
  created() {
    this.fetchJobs();
  },
};
</script>
