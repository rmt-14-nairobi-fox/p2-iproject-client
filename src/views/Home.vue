<template>
  <div class="home">
    <!-- Banner Home -->
    <div class="container-fluid banner shadow-sm">
      <div class="">
        <div class="row" v-if="!this.$store.state.isLogin">
          <div class="col-lg-4 anime">アニメ</div>
          <div class="col-lg-8 jumbotron-tag">
            <p>Ayo beri nilai "Anime" yang kamu tonton dan sampaikan disini bersama sama kita bantu orang orang menemukan anime yang cocok untuk mereka c⌒っ╹v╹ )っ</p>
          </div>
        </div>
        <div class="row" v-if="this.$store.state.isLogin">
          <div class="col-lg-12 jumbotron-tag">
            <carousel v-if="this.$store.state.isLogin">
              <slide v-for="(quote, i) in fetchAnimeQuote" :key="i">
                <div class="quote">
                  <blockquote>
                    <h5>"{{ quote.quote }}"</h5>
                    <cite>'{{ quote.character }}' from {{ quote.anime }}</cite>
                  </blockquote>
                </div>
              </slide>
            </carousel>
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  sockets: {
    sendUser(users) {
      this.$store.commit("LIST_USER", users);
    },
  },
  components: {
    Carousel,
    Slide,
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
      return this.$store.state.animeQuote;
    },
  },
  methods: {
    searchAnime() {
      this.$store.dispatch("findAnime", this.search);
    },
    animeReview(payload) {
      this.$store.commit("ANIME_WILL_REVIEW", payload);
      this.$router.push("/animereview");
    },
  },
};
</script>
<style>
.home {
  min-height: 100vh;
}
.anime_quote h5 {
  color: #8a8a8a;
}
.quote {
  text-shadow: 2px 2px #5c5c5c;
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
