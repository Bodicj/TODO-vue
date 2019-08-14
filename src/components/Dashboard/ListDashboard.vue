<template lang="pug">
div.list-dashboard
  div.list-wrapper
    div.list-creating
      input.creating-input(
      type="text"
      v-model="newListName"
      )
      button.btn(
      @click="addList"
      ) Add list
    div.list-item(
      v-for="list in getLists"
      :key="list.id"
    )
      list-item(
        :name="list.name"
        :id="list.id"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const listItem = () => import('@/components/Dashboard/ListItem');

export default {
  name: 'ListDashboard',
  components: {
    listItem,
  },
  data() {
    return {
      newListName: '',
    };
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
      this.addNewList(this.newListName);
      this.$nextTick(() => {
        this.newListName = '';
      });
    },
  },
  mounted() {
    this.getTodoLists();
  },
};
</script>

<style lang="scss" scoped>
  .list {
    &-dashboard {
    }
    &-wrapper {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      width: 660px;
      margin: 0 auto;
    }
    &-creating {
      width: 100%;
      height: 32px;
      border: 1px solid black;
      margin: 0 0 20px 10px;
      .creating-input {
        width: 70%;
        font-size: 18px;
        padding: 2px 5px;
        border: none;
        &:focus, &:active {
          outline: none;
        }
      }
      .btn {
        width: 30%;
        height: 30px;
        border: none;
        background: black;
        padding: 0 5px;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }
</style>
