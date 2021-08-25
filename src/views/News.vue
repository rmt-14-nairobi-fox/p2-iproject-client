<template>
  <div class="col mh-100">
    <div class="row">
      <NewsList />
      <div class="col-3">test</div>
    </div>
  </div>
</template>

<script>
import NewsList from '../components/NewsList.vue';
export default {
  name: 'News',
  components: {
    NewsList,
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
}

.search-box:focus {
  outline: 2px solid #464646;
  border-radius: 12px 12px 0 0;
}

.item-height {
  height: calc(100vh - 201.8px);
}

.custom-pt {
  padding-top: 16px;
}
</style>
