<template>
  <div>
    <task-item
      v-for="task in tasksLists"
      :key="task.id"
      :task-obj="task"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'
export default {
  name: 'TasksContainer',

  components: {
    TaskItem,
  },

  props: {
    tasksLists: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onDelete(idToDelete) {
      this.$emit('delete', idToDelete)
    },
  },
}
</script>

<style lang="scss" scoped></style>
