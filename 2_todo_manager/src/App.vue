<template>
  <div>
    <my-test-1 />
    <!-- <todo-manager /> -->
  </div>
</template>

<script>
/* eslint-disable */
// import TodoManager from './components/TodoManager'
// eslint-disable-next-line
import MyTest1 from './components/Tests/MyTest1.vue'

export default {
  name: 'App',
  components: {
    // TodoManager,
    MyTest1,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
