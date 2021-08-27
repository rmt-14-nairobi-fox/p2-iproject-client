<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="job in allJobs" :key="job.id">
        <div
          class="card"
          style="width: 15rem; margin-top: 50px; margin-left: 65px"
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
              style="margin-right: 1.8px; margin-top: 3px"
              @click.prevent="onClickLink(job.id)"
              >Detail</a
            >
            <a
              href="#"
              data-bs-toggle="collapse"
              class="btn btn-primary"
              v-if="access_role.role === 'recruiter'"
              style="margin-right: 1.8px margin-top:13px"
              >Add Position</a
            >
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Apply
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Apply
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h3>Are you sure apply this project {{ job.name }} and ready become {{ job.position }} ?</h3>
                    <hr>
                    <p>{{ access_role.email }}, if yes please click, Yes i'm agree. If no just cancel or close</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="onApplyJobs(job.id)">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
      this.$router.push("/chatrooms");
    },
  },
  computed: mapGetters(["allJobs"]),
  created() {
    this.fetchJobs();
  },
};
</script>
