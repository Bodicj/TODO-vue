// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import router from './router';
import store from './store';
import MockedData from './MockedData.json';


if (!window.localStorage.getItem('data')) {
  window.localStorage.setItem('data', JSON.stringify(MockedData));
}

Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
