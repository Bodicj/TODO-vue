<template lang="pug">
div.task(
  :class="{'completed': completed}"
)
  div.name
    div.btn(
    @click="changeCompleted"
    )
      v-icon(
      :name="!completed ? 'regular/square' : 'regular/check-square'"
      )
    p.task-name(
      :title="text"
      v-show="!editModeEnabled"
    ) {{ text }}
    input.task-input(
      type="text"
      v-show="editModeEnabled"
      v-model="textInput"
    )
  div.buttons
    div.btn(
      v-show="!editModeEnabled"
      @click="startEdit"
    )
      v-icon(
        name="edit"
      )
    div.btn(
      v-show="editModeEnabled"
      @click="save"
    )
      v-icon(
        name="save"
      )
    div.btn(
      class="delete"
      @click="deleteTask"
    )
      v-icon(
        name="trash"
      )
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
.task {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #424242;
  border-radius: 8px;
  margin: 5px 0;
  padding: 20px;
  transition: all ease-in-out .3s;
  &.completed {
    background: #a8ff99;
    border-color: #266835;
    color: #266835;
  }
  .name {
    width: 87%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    .btn {
      height: 100%;
      margin: 0 20px;
    }
  }
  .task {
    &-name, &-input {
      text-align: start;
      font-size: 18px;
      width: 100%;
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
    justify-content: flex-end;
    .btn {
      margin: 0 5px;
      color: #000;
      cursor: pointer;
      &.delete {
        transition: color ease-in-out .3s;
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
