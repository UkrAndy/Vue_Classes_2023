<template>
  <div>
    <div>TasksPreview</div>
    <div>
      <h1>
        Список задач
        <input
          type="text"
          v-model.trim="searchText"
          placeholder="Type search texthere"
        />
      </h1>
      <tasks-container
        v-if="filteredTasksList.length"
        :tasks-lists="filteredTasksList"
        @delete="$emit('delete', $event)"
      />
      <div v-else>Список порожній</div>
    </div>
  </div>
</template>

<script>
import TasksContainer from './TasksContainer'
export default {
  name: 'TasksPreview',

  components: {
    TasksContainer,
  },

  props: {
    tasksList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      searchText: null,
    }
  },

  computed: {
    filteredTasksList() {
      if (this.searchText)
        return this.tasksList.filter((task) =>
          task.title.includes(this.searchText)
        )
      return this.tasksList
    },
  },
}
</script>

<style lang="scss" scoped></style>
