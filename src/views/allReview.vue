<template>
  <!-- POST CARD -->
  <div class="container text-start mt-5 allreview">
    <h1>ALL REVIEW FROM EVERYYONE</h1>
    <div class="content" v-for="review in dataAnimes" :key="review.id">
      <div class="row box-content">
        <button>{{ review.recomendation }}</button>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 pt-5">
              <p>from : {{ review.User.email }}</p>

              <p>Title : {{ review.title }}</p>
              <a :href="review.url" target="_blank">More Info</a>
              <p>Review :</p>
            </div>
            <div class="col-md-6 pt-5">
              <p>Nilai dari user : {{ review.userpoin }}</p>
              <p>Rating : {{ review.rated }}</p>
              <p>Episode : {{ review.episodes }}</p>
            </div>
            <div class="row">
              <div class="col-12">
                <p>
                  {{ review.review }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4 text-end">
          <img :src="review.image_url" alt="" class="image-fluid" />
        </div>

        <div class="absolute"></div>
      </div>
    </div>
    <!-- <div class="content">
      <div class="row box-content">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 pt-2">
              <p>from : dewaindra@mail.com</p>

              <p>Title : NARUTO</p>

              <p>Review :</p>
            </div>
            <div class="col-md-6 pt-2">
              <p>Nilai dari user : 9</p>
              <p>Rating : R-13</p>
              <p>Episode : 100</p>
            </div>
            <div class="row">
              <div class="col-12">
                <p>Recomended anime dah pokoknya cerita ga ngebosenin gelud teross bos, walau kalau kalah make talnk no jutsu</p>
              </div>
              <div class="absolute"><button>Recomended</button></div>
            </div>
          </div>
        </div>

        <div class="col-4 text-end" style="padding-left: 0px">
          <img src="../assets/naruto.jpg" alt="" class="image-fluid" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import errorHandler from "../helper/errorHandler";
// import successHandler from "../helper/successCase";
export default {
  name: "allreview",
  computed: {
    dataAnimes() {
      return this.$store.state.allDataReview;
    },
  },
  created() {
    this.$store
      .dispatch("allReview")
      .then((res) => {
        console.log(res.data);
        this.$store.commit("ALL_REVIEW", res.data);
      })
      .catch((err) => {
        errorHandler(err);
      });
  },
};
</script>

<style>
.allreview {
  padding-top: 50px;
}
.allreview h1 {
  color: rgb(255, 255, 255);
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
.allreview a {
  color: aqua;
  text-decoration: none;
}
</style>
