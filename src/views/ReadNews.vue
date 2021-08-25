<template>
  <div class="col-10 mh-100 p-3 overflow-auto">
    <h1 class="font-chomsky text-center" style="font-size: 5rem;">
      The New Roman Times
    </h1>
    <div
      class="news-header custom-rounded"
      :style="`background-image: url(${$route.query.image});`"
    ></div>
    <h2>{{ $route.query.title }}</h2>
    <h5>Source: {{ sourceName }} | {{ published }}</h5>
    <p style="text-align: justify;">
      {{ $route.query.content }}
      <a :href="$route.query.url" target="_blank">Read more</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ReadNews',
  computed: {
    sourceName() {
      let source_name;
      if (this.$route.query.source) {
        source_name = this.$route.query.source.name;
      } else {
        source_name = this.$route.query.source_name;
      }
      return source_name;
    },
    published() {
      const pubDate = new Date(this.$route.query.publishedAt);
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
};
</script>

<style>
.news-header {
  height: 580px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
