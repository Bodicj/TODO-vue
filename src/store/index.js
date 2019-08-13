import Vue from 'vue';
import Vuex from 'vuex';

// modules
import list from './modules/list';
import listItem from './modules/listItem';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    list,
    listItem,
  },
});

export default store;
