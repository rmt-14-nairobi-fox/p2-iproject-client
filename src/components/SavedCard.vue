<template>
  <div class="col-12 my-3">
    <div
      @click="readNews"
      class="d-flex flex-column custom-rounded shadow-sm cursor-pointer"
    >
      <div
        class="image-header custom-rounded-top"
        :style="`background-image: url(${article.image});`"
      ></div>
      <h3 class="p-2 border-bottom">{{ article.title }}</h3>
      <h5 class="text-black-50 p-2">
        {{ article.source_name }} | {{ published }}
      </h5>
      <p class="p-2" style="text-align: justify;">{{ article.description }}</p>
      <b-button
        class="m-3 w-25 align-self-end"
        @click.stop="deleteNews"
        variant="danger"
        >Delete</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavedCard',
  props: ['article'],
  computed: {
    published() {
      const pubDate = new Date(this.article.publishedAt);
      let date = pubDate.getDate() + '';
      let month = pubDate.getMonth() + 1 + '';
      let year = pubDate.getFullYear();
      let hour = pubDate.getHours() + '';
      let minute = pubDate.getMinutes() + '';
      let second = pubDate.getSeconds() + '';

      if (date.length < 2) date = '0' + date;
      if (month.length < 2) month = '0' + month;
      if (hour.length < 2) hour = '0' + hour;
      if (minute.length < 2) minute = '0' + minute;
      if (second.length < 2) second = '0' + second;

      return `${[date, month, year].join('/')} - ${[hour, minute, second].join(
        ':'
      )}`;
    },
  },
  methods: {
    readNews() {
      const payload = { ...this.article };
      this.$router.push({ name: 'ReadNews', query: payload });
    },
    deleteNews() {
      this.$store.dispatch('deleteNews', this.article.id);
    },
  },
};
</script>

<style></style>
