<template>
  <div>
    <div class="menu">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/contacts">Go to contacts</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.menu {
  border: 2px solid blue;
}
.content {
  border: 2px solid red;
}
</style>
