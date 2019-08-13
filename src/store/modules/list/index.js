import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  lists: [],
  count: 0,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

