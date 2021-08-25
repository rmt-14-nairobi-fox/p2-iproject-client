<template>
  <div class="col-3 custom-p">
    <div class="bg-light custom-rounded post-height p-3 overflow-auto">
      <div class="row">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard.vue';
export default {
  name: 'PostList',
  props: ['posts'],
  components: {
    PostCard,
  },
};
</script>

<style></style>
