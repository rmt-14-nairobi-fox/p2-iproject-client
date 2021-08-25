<template>
  <div class="col-10 mh-100">
    <div class="row">
      <NewsList />
      <PostList />
    </div>
  </div>
</template>

<script>
import NewsList from '../components/NewsList.vue';
import PostList from '../components/PostList.vue';
export default {
  name: 'News',
  components: {
    NewsList,
    PostList,
  },
};
</script>

<style>
.search-box {
  background-color: #ececec;
  border: none;
  border-radius: 12px 12px 0 0;
  height: 100px;
  font-size: 24px;
  border-bottom: 1px solid #c0c0c0;
}

.search-box:focus {
  outline: 2px solid #464646;
  border-radius: 12px 12px 0 0;
}

.item-height {
  height: calc(100vh - 201.8px);
}

.post-height {
  height: calc(100vh - 117.8px);
}

.custom-pt {
  padding-top: 16px;
}

.custom-p {
  padding: 16px 16px 16px 0;
}

.custom-rounded {
  border-radius: 12px;
}

.custom-rounded-top {
  border-radius: 12px 12px 0 0;
}

.custom-rounded-sm {
  border-radius: 4px;
}

.news-card {
  width: 50%;
}

.cursor-pointer {
  cursor: pointer;
}

.image-header {
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
