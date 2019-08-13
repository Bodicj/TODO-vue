const mutations = {
  setListOfLists: (state, todoList) => {
    state.lists = todoList.lists;
    state.count = todoList.count;
  },
};

export default mutations;
