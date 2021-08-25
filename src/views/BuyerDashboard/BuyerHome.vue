<template>
  <div>
    <buyer-navbar></buyer-navbar>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-3">
          <buyer-sidebar></buyer-sidebar>
        </div>
        <div class="col-md-9">
          <nav aria-label="..." class="paginationcontainer">
            <ul class="pagination">
              <li class="page-item" v-if="currentPages > 1">
                <a class="page-link" href="#" @click.prevent="prevBtn"
                  >Previous</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" href="#">{{ currentPages }}</a>
              </li>
              <li class="page-item" v-if="currentPages < pages">
                <a class="page-link" href="#" @click.prevent="nextBtn">Next</a>
              </li>
            </ul>
          </nav>
          <div class="row">
            <!-- loop cards disini -->
            <buyer-card
              v-for="item in this.availableItemsData"
              :key="item.id"
              :item="item"
            ></buyer-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyerNavbar from "../../components/BuyerComponents/BuyerNavbar.vue";
import BuyerSidebar from "../../components/BuyerComponents/BuyerSidebar.vue";
import BuyerCard from "../../components/BuyerComponents/BuyerCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "BuyerHome",
  components: {
    BuyerNavbar,
    BuyerSidebar,
    BuyerCard,
  },
  methods: {
    ...mapActions(["fetchItems"]),
    nextBtn() {
      if (this.filtered === false) {
        this.fetchItems(this.currentPages + 1);
      } else {
        const data = {
          searchInput: this.currentSearch,
          page: this.currentPages + 1,
        };
        this.getFilter(data);
      }
    },
    prevBtn() {
      if (this.filtered === false) {
        this.fetchItems(this.currentPages - 1);
      } else {
        const data = {
          searchInput: this.currentSearch,
          page: this.currentPages - 1,
        };
        this.getFilter(data);
      }
    },
  },
  computed: {
    ...mapState([
      "availableItemsData",
      "currentPages",
      "filtered",
      "pages",
      "currentSearch",
    ]),
  },
  created(){
    this.fetchItems()
  }
};
</script>

<style>
.paginationcontainer {
  display: flex;
  justify-content: flex-end;
}
.cardStyle{
  height: 450px;
  margin-bottom: 20px;
}
</style>
