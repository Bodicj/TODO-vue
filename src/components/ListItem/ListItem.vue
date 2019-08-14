<template lang="pug">
div.list-item
  router-link.go-back(
  tag="p"
  :to="{ path: '/list' }"
  ) <= Go back
  div.task-wrapper
    div.new-task
      input.new-task-input(
        type="text"
        v-model="newTaskName"
      )
      button.btn(
        @click="addTask"
      ) Add task
    div.scrollable
      task(
        v-for="task in tasks"
        :key="task.id"
        :text="task.text"
        :id="task.id"
        :completed="task.completed"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const task = () => import('@/components/ListItem/Task');

export default {
  name: 'ListItem',
  components: {
    task,
  },
  data() {
    return {
      newTaskName: '',
    };
  },
  computed: {
    ...mapGetters({
      tasks: 'listItem/getCurrentListTasks',
    }),
  },
  methods: {
    ...mapActions({
      addNewTask: 'listItem/addTask',
    }),
    addTask() {
      this.addNewTask(this.newTaskName);
      this.newTaskName = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  .go-back {
    margin: 10px 0;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }
  .task-wrapper {
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-items: flex-start;
    .new-task {
      width: 100%;
      margin-bottom: 20px;
      height: 35px;
      border: 2px solid black;
      border-radius: 4px;
      &-input, .btn {
        height: 100%;
        border: none;
      }
      &-input {
        width: 80%;
        padding: 0 15px;
      }
      .btn {
        width: 20%;
        background: black;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
    .scrollable {
      width: 100%;
      height: calc(100vh - 270px);
      overflow-y: auto;
    }
  }
}
</style>
