<template>
  <div class="col-10 mh-100">
    <div class="row">
      <SavedList />
      <PostList :posts="myPosts" />
    </div>
  </div>
</template>

<script>
import SavedList from '../components/SavedList.vue';
import PostList from '../components/PostList.vue';
import { mapState } from 'vuex';
export default {
  name: 'MySpace',
  components: {
    SavedList,
    PostList,
  },
  computed: {
    ...mapState(['myPosts']),
  },
  methods: {
    fetchAllMyPost() {
      this.$store.dispatch('fetchAllMyPost');
    },
  },
  created() {
    this.fetchAllMyPost();
  },
};
</script>

<style></style>
