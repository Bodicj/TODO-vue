<template lang="pug">
div.task
  p(
    v-show="!editModeEnabled"
  ) {{ text }}
  input(
    type="text"
    v-show="editModeEnabled"
    v-model="textInput"
  )
  div.buttons
    button(
      v-show="!editModeEnabled"
      @click="startEdit"
    ) edit
    button(
      v-show="editModeEnabled"
      @click="save"
    ) save
    button(
      @click="deleteTask"
    ) delete
    button(
      @click="changeCompleted"
    ) {{!completed ? 'Complete' : 'Incomplete'}}
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Task',
  data() {
    return {
      editModeEnabled: false,
      textInput: '',
    };
  },
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    id: {
      type: String,
      required: true,
      default: '',
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      editTaskName: 'listItem/changeTask',
      removeTask: 'listItem/deleteTask',
      triggerCompleted: 'listItem/triggerCompleted',
    }),
    startEdit() {
      this.editModeEnabled = true;
    },
    save() {
      this.editTaskName({ id: this.id, text: this.textInput });
      this.$nextTick(() => {
        this.editModeEnabled = false;
      });
    },
    deleteTask() {
      this.removeTask(this.id);
    },
    changeCompleted() {
      this.triggerCompleted(this.id);
    },

  },
  created() {
    this.textInput = this.text;
  },
};
</script>

<style lang="scss" scoped>

</style>
