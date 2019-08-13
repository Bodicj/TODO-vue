/* eslint-disable no-console */
import { APICall } from '@/service';
import { createUUID } from '@/helpers';

const actions = {
  getListItem: async ({ getters, commit }) => {
    /* eslint-disable arrow-body-style */
    const currentList = await APICall((data) => {
      return data.lists.find(list => list.id === getters.getCurrentListId);
    });
    commit('setCurentListData', currentList);
  },
  changeCurrentItem: ({ commit }, id) => {
    commit('setCurrentItemId', id);
  },
  changeTask: async ({ getters, dispatch }, { id, text }) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const indexList = data.lists.findIndex(list => list.id === getters.getCurrentListId);
      if (indexList > -1) {
        const taskIndex = data.lists[indexList].tasks.results.findIndex(task => task.id === id);
        if (taskIndex > -1) {
          const newData = { ...data };
          newData.lists[indexList].tasks.results[taskIndex].text = text;
          window.localStorage.setItem('data', JSON.stringify(data));
          return data;
        }
        console.warn('There is no task with such id');
        return data;
      }
      console.warn('There is no list with such id');
      return data;
    });
    dispatch('getListItem');
  },
  deleteTask: async ({ getters, dispatch }, id) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const indexList = data.lists.findIndex(list => list.id === getters.getCurrentListId);
      if (indexList > -1) {
        const taskIndex = data.lists[indexList].tasks.results.findIndex(task => task.id === id);
        if (taskIndex > -1) {
          const newData = { ...data };
          newData.lists[indexList].tasks.results.splice(taskIndex, 1);
          newData.lists[indexList].tasks.count = newData.lists[indexList].tasks.results.length;
          window.localStorage.setItem('data', JSON.stringify(data));
          return data;
        }
        console.warn('There is no task with such id');
        return data;
      }
      console.warn('There is no list with such id');
      return data;
    });
    dispatch('getListItem');
  },
  triggerCompleted: async ({ getters, dispatch }, id) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const indexList = data.lists.findIndex(list => list.id === getters.getCurrentListId);
      if (indexList > -1) {
        const taskIndex = data.lists[indexList].tasks.results.findIndex(task => task.id === id);
        if (taskIndex > -1) {
          const newData = { ...data };
          newData.lists[indexList]
            .tasks.results[taskIndex]
            .completed = !newData.lists[indexList].tasks.results[taskIndex].completed;
          window.localStorage.setItem('data', JSON.stringify(data));
          return data;
        }
        console.warn('There is no task with such id');
        return data;
      }
      console.warn('There is no list with such id');
      return data;
    });
    dispatch('getListItem');
  },
  addTask: async ({ getters, dispatch }) => {
    // I know that this is a really huge callback, but I need to do this in the way that
    // we want to save edited task in the local storage
    await APICall((data) => {
      const indexList = data.lists.findIndex(list => list.id === getters.getCurrentListId);
      if (indexList > -1) {
        const newData = { ...data };
        const taskSample = {
          text: 'Text sample',
          id: createUUID(),
          completed: false,
        };
        newData.lists[indexList].tasks.results.push(taskSample);
        newData.lists[indexList].tasks.count = newData.lists[indexList].tasks.results.length;
        window.localStorage.setItem('data', JSON.stringify(data));
      }
      console.warn('There is no list with such id');
      return data;
    });
    dispatch('getListItem');
  },
};

export default actions;
