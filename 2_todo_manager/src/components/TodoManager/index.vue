<template>
  <div>
    <!-- 3.використати -->
    <add-task-form @add-new-task="onAddNewTask" />
    <hr />
    <tasks-preview :tasks-list="tasksListData" @delete="onDeleteTask" />
  </div>
</template>

<script>
//1.Імпортувати
import AddTaskForm from './AddTaskForm.vue'
import TasksPreview from './TasksPreview'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'TodoManager',
  //2.Реєструвати
  components: {
    AddTaskForm,
    TasksPreview,
  },
  data() {
    return {
      tasksListData: [],
    }
  },

  methods: {
    onDeleteTask(taskId) {
      this.tasksListData = this.tasksListData.filter(
        (task) => task.id !== taskId
      )
    },
    onAddNewTask(taskData) {
      this.tasksListData.push({
        id: uuidv4(),
        // title:taskData.title,
        // priority:taskData.priority
        ...taskData,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
