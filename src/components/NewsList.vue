<template>
  <div class="col-9 custom-pt">
    <div class="d-flex flex-column mw-100">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search news"
        class="search-box p-3 text-center"
      />
      <div class="bg-light mw-100 item-height px-3 overflow-auto">
        <div class="row mt-3">
          <NewsCard
            v-for="(article, i) in news.articles"
            :key="i"
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';
import { mapState } from 'vuex';
export default {
  name: 'NewsList',
  computed: {
    ...mapState(['news']),
  },
  components: {
    NewsCard,
  },
  methods: {
    fetchNews() {
      this.$store.dispatch('fetchNews');
    },
  },
  created() {
    this.fetchNews();
  },
};
</script>

<style></style>
