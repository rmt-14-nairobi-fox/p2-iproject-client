<template>
  <div class="col-10 mh-100">
    <div class="row">
      <SavedList />
      <PostList />
    </div>
  </div>
</template>

<script>
import SavedList from '../components/SavedList.vue';
import PostList from '../components/PostList.vue';
export default {
  name: 'MySpace',
  components: {
    SavedList,
    PostList,
  },
};
</script>

<style></style>
