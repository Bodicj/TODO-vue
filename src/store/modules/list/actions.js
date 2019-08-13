import { APICall } from '@/service';
import { createUUID } from '@/helpers';

const actions = {
  fetchList: async ({ commit }) => {
    const todoList = await APICall(lists => lists);
    commit('setListOfLists', todoList);
  },
  deleteList: async ({ dispatch }, id) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const indexList = data.lists.findIndex(list => list.id === id);
      if (indexList > -1) {
        const newData = { ...data };
        newData.lists.splice(indexList, 1);
        newData.count = newData.lists.length;
        window.localStorage.setItem('data', JSON.stringify(data));
        return data;
      }
      return data;
    });
    dispatch('fetchList');
  },
  addList: async ({ dispatch }) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const newData = { ...data };
      const listSample = {
        name: 'List item',
        id: createUUID(),
        tasks: {
          results: [],
          count: 0,
        },
      };
      newData.lists.push(listSample);
      newData.count = newData.lists.length;
      window.localStorage.setItem('data', JSON.stringify(data));
      return data;
    });
    dispatch('fetchList');
  },
  changeTask: async ({ dispatch }, { id, text }) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const indexList = data.lists.findIndex(list => list.id === id);
      if (indexList > -1) {
        const newData = { ...data };
        newData.lists[indexList].name = text;
        window.localStorage.setItem('data', JSON.stringify(data));
      }
      return data;
    });
    dispatch('fetchList');
  },
};

export default actions;
