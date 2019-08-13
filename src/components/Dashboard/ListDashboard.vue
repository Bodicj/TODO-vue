<template lang="pug">
div.list-dashboard
  router-link(
    v-for="list in getLists"
    tag="div"
    :key="list.id"
    :to="{path: `/list/${list.id}`}"
  )
    list-item(
      :name="list.name"
      :id="list.id"
    )
  button(
    @click="addList"
  ) Add list
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const listItem = () => import('@/components/Dashboard/ListItem');

export default {
  name: 'ListDashboard',
  components: {
    listItem,
  },
  computed: {
    ...mapGetters({
      getLists: 'list/getLists',
    }),
  },
  methods: {
    ...mapActions({
      getTodoLists: 'list/fetchList',
      addNewList: 'list/addList',
    }),
    addList() {
      this.addNewList();
    },
  },
  mounted() {
    this.getTodoLists();
  },
};
</script>

<style lang="scss" scoped>

</style>
