<template>
  <div id="app" class="vh-100 container-fluid">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    checkToken() {
      this.$store.dispatch('checkTokenAction');
    },
  },
  sockets: {
    connect() {
      console.log('Connected');
    },
  },
  created() {
    this.checkToken();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&display=swap');
@font-face {
  font-family: chomsky;
  src: url('./assets/fonts/Chomsky.otf');
}

* {
  font-family: 'Noto Serif', serif;
}

body {
  background-color: #dbdbdb;
}

.sidebar-width {
  width: 300px;
}

.sidebar-item-active {
  border-left: 4px solid white;
  background-color: #1f1f1f;
}

.sidebar-item:hover {
  cursor: pointer;
  background-color: #7e7e7e;
}

.content-height {
  height: calc(100% - 85px);
  max-height: calc(100% - 85px);
}

.font-chomsky {
  font-family: 'chomsky';
}
</style>
