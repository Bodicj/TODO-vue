import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  name: '',
  id: null,
  tasks: [],
  tasksCount: 0,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

