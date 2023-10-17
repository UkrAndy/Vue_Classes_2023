<template>
  <div>
    <h1>ContactsPage</h1>
    <div>
      <div v-for="user in contactsToDisplay" :key="user.id">
        <h2>{{ user.name }}</h2>
        <p>{{ user.type }} : {{ user.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',

  data() {
    return {
      contacts: [
        {
          id: 11,
          type: 'admin',
          name: 'Ivan',
          phone: '11111111',
        },
        {
          id: 22,
          type: 'manager',
          name: 'Petro',
          phone: '2222222',
        },
        {
          id: 445,
          type: 'worker',
          name: 'Olga',
          phone: '333333',
        },
      ],
    }
  },

  computed: {
    userId() {
      return this.$route.params.id
    },
    contactsToDisplay() {
      if (this.userId)
        return this.contacts.filter((user) => user.id == this.userId)
      else return this.contacts
    },
  },
}
</script>

<style lang="scss" scoped></style>
