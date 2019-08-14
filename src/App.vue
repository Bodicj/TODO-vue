<template>
  <div id="app">
    <ui-heading></ui-heading>
    <router-view class="router-view"/>
  </div>
</template>

<script>
const uiHeading = () => import('./components/UI/Header.vue');
export default {
  name: 'App',
  components: {
    uiHeading,
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus, *:active {
  outline: none;
}
h1, h2, h3, h4 p, span {
  cursor: default;
}
#app {
  width: 100%;
  overflow-x: hidden;
}
.router-view {
  padding: 40px;
}
</style>
