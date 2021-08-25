<template>
  <div>
    <div id="app" class="appContainer">
        <router-view />
    </div>
    <footer>
      <HFooter class="footerHacktiv8"></HFooter>
    </footer>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import { mapMutations } from "vuex";
export default {
  components: {
    HFooter,
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.CHANGE_LOGIN(true);
    } else {
      this.CHANGE_LOGIN(false);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.footerHacktiv8 {
  z-index: 101;
  bottom: 0;
  width: 100%;
  position: fixed
}

.appContainer{
  padding-bottom: 100px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
