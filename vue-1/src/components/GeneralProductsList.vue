<template>
  <div>
    <h1>{{ title }}</h1>
    <products-list
      v-if="productsListData.length > 0"
      :products-list-data="productsListData"
      :is-selected-list="isSelectedList"
      @deselect="$emit('deselect', $event)"
      @select="$emit('select', $event)"
    />
    <div v-else>No data</div>
  </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
export default {
  name: 'GeneralProductsList',

  components: {
    ProductsList,
  },

  props: {
    title: {
      type: String,
      default: 'No title',
    },
    productsListData: {
      type: Array,
      default: () => [],
    },
    isSelectedList: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
