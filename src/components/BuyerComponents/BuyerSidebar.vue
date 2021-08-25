<template>
  <section class="filters">
    <h3 class="text-center">Filters</h3>
    <!-- section search -->
    <section>
      <h5 for="exampleDataList" class="form-label pt-4">Item Name</h5>
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        v-model="searchInput"
      />
    </section>
    <!-- section search -->
    <button
      type="button"
      class="btn btn-primary btn-lg btn-block mt-4 buttons"
      @click.prevent="getFilterBtn"
    >
      Search
    </button>
    <button
      type="button"
      class="btn btn-primary btn-lg btn-block mt-4"
      @click.prevent="clearFilterBtn"
    >
      Clear Filter
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BuyerSidebar",
  methods: {
    ...mapActions(["fetchItems", "getFilter"]),
    getFilterBtn() {
      const data = {
        searchInput: this.searchInput,
      };
      this.getFilter(data);
    },
    clearFilterBtn() {
      this.searchInput = null;
      this.fetchItems();
    },
  },
  data() {
    return {
      searchInput: null,
    };
  },
};
</script>

<style>
.types {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.buttons{
  margin-right: 10px;
}
</style>
