<template lang="pug">
div.ui-list-item(
  @click="goToList"
)
  p.list-name(
    :title="name"
    v-show="!editModeEnabled"
  ) {{ name }}
  input.list-input(
  type="text"
  v-model="nameInput"
  v-show="editModeEnabled"
  @click.stop="inputHandler"
  )
  div.buttons
    div.btn(
      v-show="!editModeEnabled"
      @click.stop="editName"
    )
      v-icon(
        name="edit"
      )
    div.btn(
      v-show="editModeEnabled"
      @click.stop="saveName"
    )
      v-icon.btn(
        name="save"
      )
    div.btn(
      class="delete"
      @click.stop="deleteItemList"
    )
      v-icon.btn(
        name="trash"
      )
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ListItem',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    id: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      editModeEnabled: false,
      nameInput: '',
    };
  },
  created() {
    this.nameInput = this.name;
  },
  methods: {
    ...mapActions({
      removeList: 'list/deleteList',
      changeName: 'list/changeListName',
      setCurrentList: 'listItem/changeCurrentItem',
      getListData: 'listItem/getListItem',
    }),
    deleteItemList() {
      this.removeList(this.id);
    },
    editName() {
      this.editModeEnabled = true;
    },
    saveName() {
      this.changeName({ id: this.id, text: this.nameInput });
      this.$nextTick(() => {
        this.editModeEnabled = false;
      });
    },
    inputHandler(e) {
      e.stopPropagation();
    },
    goToList(e) {
      e.preventDefault();
      this.setCurrentList(this.id);
      this.getListData();
      this.$nextTick(() => {
        this.$router.push({ path: `/list/${this.id}` });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-list-item {
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 15px;
  background: #f8e9cf;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  .list {
    &-name, &-input {
      width: 100%;
      text-align: start;
      font-size: 18px;
    }
    &-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    &-input {
      border: none;
      background: transparent;
      border-bottom: 2px solid black;
      outline: none;
      &:focus, &:active {
        outline: none;
      }
    }
  }
  .buttons {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: flex-end;
    .btn {
      margin: 0 2px;
      cursor: pointer;
      transition: all ease-in-out .3s;
      &.delete {
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
