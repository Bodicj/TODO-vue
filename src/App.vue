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

.router-view {
  padding: 40px;
}
</style>
