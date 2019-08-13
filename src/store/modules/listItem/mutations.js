const mutations = {
  setCurentListData: (state, currentList) => {
    state.name = currentList.name;
    state.tasks = currentList.tasks.results;
    state.tasksCount = currentList.tasks.count;
  },
  setCurrentItemId: (state, id) => {
    state.id = id;
  },
};

export default mutations;
