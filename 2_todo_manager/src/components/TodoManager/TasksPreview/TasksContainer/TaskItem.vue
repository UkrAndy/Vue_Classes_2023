<template>
  <div class="task-container">
    <div>
      {{ taskObj.title }}
    </div>
    <div>
      {{ taskObj.priority }}
    </div>
    <button @click="onDelete">delete</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',

  props: {
    taskObj: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    onDelete() {
      this.$emit('delete', this.taskObj.id)
    },
  },
}
</script>

<style lang="css" scoped>
.task-container {
  display: flex;
  justify-content: space-between;
}
</style>
