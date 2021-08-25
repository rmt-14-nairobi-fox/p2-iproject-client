<template>
  <div id="app" class="vh-100 container-fluid">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&display=swap');

* {
  font-family: 'Noto Serif', serif;
}

body {
  background-color: #e6e6e6;
}

.sidebar-width {
  width: 300px;
}

.sidebar-item-active {
  border-left: 4px solid white;
}

.sidebar-item:hover {
  cursor: pointer;
  background-color: #7e7e7e;
}
</style>
