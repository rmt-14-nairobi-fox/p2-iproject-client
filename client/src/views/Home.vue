<template>
  <div class="home">
    <list-post></list-post>
    <!-- <page-chat></page-chat> -->
    <!-- <login></login> -->
    <HFooter class="mt-10"></HFooter>
    <pre>
      {{ userLocation }}
    </pre>
  </div>
</template>

<script>
import ListPost from "./ListPost.vue";
import HFooter from "vue-hacktiv8-footer";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: { ListPost, HFooter },
  computed: {
    ...mapState(["userLocation"]),
  },
  methods: {
    ...mapActions(["fetchIP"]),
  },
  created() {
    this.fetchIP();
  },
};
</script>
