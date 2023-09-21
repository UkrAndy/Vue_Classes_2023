<template>
  <div>
    <label>
      Task title
      <input type="text" v-model="title" />
    </label>
    <br />
    <label>
      Task priority
      <input type="text" v-model="priority" />
    </label>
    <br />
    <button @click="onAdd">Add task</button>
  </div>
</template>

<script>
export default {
  name: 'AddTaskForm',

  data() {
    return {
      title: null,
      priority: null,
    }
  },

  methods: {
    clearData() {
      this.title = null
      this.priority = null
    },
    onAdd() {
      this.$emit('addNewTask', {
        title: this.title,
        priority: this.priority,
      })
      this.clearData()
    },
  },
}
</script>

<style lang="scss" scoped></style>
