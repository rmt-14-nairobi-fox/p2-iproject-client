<template>
  <div class="write-review text-start">
    <h1>WRITE YOUR OPINION ABOUT THIS ANIME HERE</h1>
    <p>{{ review }}</p>
    <div class="content">
      <div class="row box-content">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 pt-2">
              <h2>Anime Info</h2>
              <a :href="theAnimeData.url" target="_blank">MORE INFO</a>
            </div>
            <div class="col-md-6 pt-2">
              <p>Title : {{ theAnimeData.title }}</p>
              <p>Rating : {{ theAnimeData.rated }}</p>
              <p>Episode : {{ theAnimeData.episodes }}</p>
            </div>
            <div class="row">
              <form @submit.prevent="postReview">
                <div class="row">
                  <div class="col-6">
                    <label class="form-check-label">Rate the anime : </label><br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="1" />
                      <label class="form-check-label">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="2" />
                      <label class="form-check-label">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="3" />
                      <label class="form-check-label">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="4" />
                      <label class="form-check-label">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="5" />
                      <label class="form-check-label">5</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="6" />
                      <label class="form-check-label">6</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="7" />
                      <label class="form-check-label">7</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="8" />
                      <label class="form-check-label">8</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="9" />
                      <label class="form-check-label">9</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="userpoin" value="10" />
                      <label class="form-check-label">10</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <label class="form-check-label" for="inlineRadio1">This anime Recomended? </label><br />
                    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked value="recomended" v-model="recomendation" />
                    <label class="btn btn-outline-success" for="success-outlined">Recomended</label>

                    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" value="notrecomended" v-model="recomendation" />
                    <label class="btn btn-outline-danger" for="danger-outlined">Not Recomended</label>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your review : </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="review"></textarea>
                </div>
              </form>
              <button class="btn btn-primary" type="submit" @click.prevent="postReviewEdit(theAnimeData.id)">Post Review</button>
            </div>
          </div>
        </div>

        <div class="col-4 text-end justify-content-center">
          <img :src="theAnimeData.image_url" alt="" class="image-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import errorHandler from "../helper/errorHandler";
import successHandler from "../helper/successCase";
export default {
  name: "reviewAnime",
  data() {
    return {
      userpoin: this.$store.state.myReviewEdit.userpoin,
      review: this.$store.state.myReviewEdit.review,
      recomendation: this.$store.state.myReviewEdit.recomendation,
    };
  },
  methods: {
    postReviewEdit(id) {
      this.$store
        .dispatch("editReviewAnime", { id: id, userpoin: this.userpoin, review: this.review, recomendation: this.recomendation })
        .then(() => {
          this.$router.push("/myreview");
          successHandler("Your Review success to Edit");
        })
        .catch((err) => {
          errorHandler(err);
        });
    },
  },
  computed: {
    theAnimeData() {
      return this.$store.state.myReviewEdit;
    },
  },
  created() {
    if (this.$store.state.myReviewEdit.userpoin === undefined) {
      this.$router.push("/myreview");
    }
  },
};
</script>

<style>
.write-review {
  margin-top: 150px;
}
.write-review a {
  color: aqua;
  text-decoration: none;
}
.write-review h1 {
  color: rgb(255, 255, 255);
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
.write-review img {
  margin: 5%;
}
</style>
