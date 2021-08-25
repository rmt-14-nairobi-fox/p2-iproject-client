<template>
  <div class="home">
    <list-post></list-post>
    <page-chat></page-chat>
    <login></login>
    <HFooter></HFooter>
  </div>
</template>

<script>
import ListPost from "./ListPost.vue";
import Login from "./Login.vue";
import PageChat from "./PageChat.vue";
import HFooter from "vue-hacktiv8-footer";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ListPost, PageChat, Login, HFooter },
};
</script>
