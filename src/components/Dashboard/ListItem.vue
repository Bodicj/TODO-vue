<template lang="pug">
div.ui-list-item
  p(
    v-show="!editModeEnabled"
  ) {{ name }}
  input(
  type="text"
  v-model="nameInput"
  v-show="editModeEnabled"
  @input.stop="inputHandler"
  )
  div.buttons
    button(
      v-show="!editModeEnabled"
      @click.stop="editName"
    )  edit
    button(
      v-show="editModeEnabled"
      @click.stop="saveName"
    )  save
    button(
      @click.stop="deleteItemList"
    )  Delete
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
    }),
    deleteItemList() {
      this.removeList(this.id);
    },
    editName() {
      this.editModeEnabled = true;
    },
    saveName() {
      this.editModeEnabled = false;
    },
    inputHandler(e) {
      e.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
