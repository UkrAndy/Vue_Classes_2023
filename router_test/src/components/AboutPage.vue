<template>
  <div>
    <h1>About Page</h1>
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
        class="user-item"
        @click="onMove(user.id)"
      >
        {{ user.name }} -{{ user.type }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      users: [
        {
          id: 11,
          type: 'admin',
          name: 'Ivan',
        },
        {
          id: 22,
          type: 'manager',
          name: 'Petro',
        },
        {
          id: 445,
          type: 'worker',
          name: 'Olga',
        },
      ],
    }
  },

  methods: {
    onMove(userId) {
      this.$router.push({ name: 'contacts', params: { id: userId } })
    },
  },
}
</script>

<style lang="css" scoped>
.user-item {
  cursor: pointer;
}
</style>
