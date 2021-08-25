<template>
  <div class="col-10 mh-100">
    <div
      class=" h-100 d-flex flex-column align-items-center justify-content-center"
    >
      <h1 class="font-chomsky">Covid Cases in Indonesia</h1>
      <img :src="graph.image" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Corona',
  computed: {
    ...mapState(['graph']),
  },
  methods: {
    getGraph() {
      this.$store.dispatch('getGraph');
    },
  },
  created() {
    this.getGraph();
  },
};
</script>

<style></style>
