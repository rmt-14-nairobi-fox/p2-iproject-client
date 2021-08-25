<template>
  <div class="home">
    <list-post></list-post>
    <page-chat></page-chat>
    <login></login>
  </div>
</template>

<script>
import ListPost from "./ListPost.vue";
import Login from "./Login.vue";
import PageChat from "./PageChat.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ListPost, PageChat, Login },
};
</script>
