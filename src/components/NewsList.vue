<template>
  <div class="col-9 custom-pt">
    <div class="d-flex flex-column mw-100">
      <form class="search-box" @submit.prevent="searchAction">
        <input
          v-model="searchQuery"
          type="text"
          name="search"
          id="search"
          placeholder="Search news"
          class="search-box p-3 w-100 text-center"
        />
      </form>

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
  data() {
    return {
      searchQuery: '',
    };
  },
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
    searchAction() {
      if (this.searchQuery) {
        this.$store.dispatch('searchAction', { searchQuery: this.searchQuery });
      } else {
        this.fetchNews();
      }
    },
  },
  created() {
    // this.fetchNews();
  },
};
</script>

<style></style>
