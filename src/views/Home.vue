<template>
  <div class="home">
    <!-- Banner Home -->
    <div class="container-fluid banner shadow-sm">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 anime text-center">アニメ</div>
          <div class="col-lg-8 jumbotron-tag">
            <p>Ayo beri niali "Anime" yang kamu tonton dan sampaikan disini bersama sama kita bantu orang orang menemukan anime yang cocok untuk mereka c⌒っ╹v╹ )っ</p>

            <div class="row text-center justify-content-center">
              <div class="col-md-12">
                <p>Daftar Sekarang dan jadilah Seorang Weebo</p>
              </div>

              <div class="form-banner">
                <router-link to="/register" class="button" aria-current="page" v-if="!this.$store.state.isLogin"> Register</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Anni Search -->
    <div>
      <div class="head-search">
        <h1>The<strong>ANIME</strong>search</h1>
        <form class="search-box" @submit.prevent="searchAnime">
          <input type="search" class="search-field" placeholder="Search Anime" required v-model="search" /><button type="submit" class="submit"><i class="bx bx-search"></i></button>
        </form>
      </div>
      <main v-if="this.$store.state.dataAnime.length !== 0">
        <div class="cards justify-content-center">
          <div class="card-anime col-md-3" v-for="anime in dataAnimes" :key="anime.mal_id">
            <a class="nav-link" aria-current="page" @click="animeReview(anime)">
              <img :src="anime.image_url" alt="Anime Image" />
              <h3>{{ anime.title }}</h3>
            </a>
          </div>
        </div>
      </main>
      <div class="anime_quote head-search" v-if="this.$store.state.dataAnime.length === 0">
        <h1>Anime Save The Word</h1>
        <div class="row justify-content-center">
          <div v-for="quote in fetchAnimeQuote" :key="quote">
            <div class="quote">
              <blockquote>
                <p>"{{ quote.quote }}"</p>
                <cite>'{{ quote.character }}' from {{ quote.anime }}</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.$store.dispatch("findQuote").then((res) => {
      this.$store.commit("ANIME_QUOTE", res.data);
    });
  },
  computed: {
    dataAnimes() {
      return this.$store.state.dataAnime;
    },
    fetchAnimeQuote() {
      console.log(this.$store.state.animeQuote);
      return this.$store.state.animeQuote;
    },
  },
  methods: {
    searchAnime() {
      this.$store.dispatch("findAnime", this.search);
    },
    animeReview(payload) {
      console.log(payload);
      this.$store.commit("ANIME_WILL_REVIEW", payload);
      this.$router.push("/animereview");
    },
  },
};
</script>
<style>
.anime_quote p {
  color: #8a8a8a;
}
.quote {
  display: inline-block;
  width: 600px;
  margin: 1em;
  overflow: hidden;
}
.quote blockquote {
  background-color: bg;
  display: inline-block;
  margin: 0;
  padding: 1em;
  position: relative;
}
.quote blockquote :before {
  background-color: bg;
  bottom: -10%;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: -10%;
  transform: rotate(-15deg) skew(5deg);
}
.quote blockquote cite {
  display: block;
  font-style: italic;
  text-align: right;
}
.quote blockquote cite :before {
  content: "- ";
}
</style>
