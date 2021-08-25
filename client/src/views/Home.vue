<template>
  <div class="home">
    <list-post></list-post>
    <!-- <page-chat></page-chat> -->
    <!-- <login></login> -->
    <HFooter class="mt-10"></HFooter>
  </div>
</template>

<script>
import ListPost from "./ListPost.vue";
import HFooter from "vue-hacktiv8-footer";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: { ListPost, HFooter },
  computed: {},
  methods: {
    ...mapActions(["fetchIP"]),
  },
  created() {
    this.fetchIP();
  },
};
</script>
