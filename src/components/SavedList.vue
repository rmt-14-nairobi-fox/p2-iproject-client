<template>
  <div class="col-9 custom-pt">
    <div class="d-flex flex-column">
      <div
        class="search-box d-flex align-items-center justify-content-center p-3"
      >
        <h1 class="font-chomsky">The New Roman Times</h1>
      </div>
      <div class="bg-light mw-100 item-height px-3 overflow-auto">
        <div class="row mt-3">
          <SavedCard
            v-for="article in savednews"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SavedCard from '../components/SavedCard.vue';
import { mapState } from 'vuex';
export default {
  name: 'SavedList',
  computed: {
    ...mapState(['savednews']),
  },
  components: {
    SavedCard,
  },
  methods: {
    fetchSavedNews() {
      this.$store.dispatch('fetchSavedNews');
    },
  },
  created() {
    this.fetchSavedNews();
  },
};
</script>

<style></style>
