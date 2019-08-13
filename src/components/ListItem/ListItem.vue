<template lang="pug">
div.list-item
  router-link.go-back(
  tag="p"
  :to="{ path: '/list' }"
  ) <= Go back
  task(
    v-for="task in tasks"
    :key="task.id"
    :text="task.text"
    :id="task.id"
    :completed="task.completed"
  )
  button(
    @click="addTask"
  ) Add task
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const task = () => import('@/components/ListItem/Task');

export default {
  name: 'ListItem',
  components: {
    task,
  },
  computed: {
    ...mapGetters({
      tasks: 'listItem/getCurrentListTasks',
    }),
  },
  methods: {
    ...mapActions({
      setCurrentList: 'listItem/changeCurrentItem',
      getListData: 'listItem/getListItem',
      addNewTask: 'listItem/addTask',
    }),
    addTask() {
      this.addNewTask();
    },
  },
  created() {
    this.setCurrentList(this.$route.params.id);
    this.getListData();
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
}
</style>
