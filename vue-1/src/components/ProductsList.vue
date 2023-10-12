<template>
  <div class="list-container">
    <product-card
      v-for="card in productsListData"
      :key="card.id"
      :product-data="card"
      :is-selected="isSelectedList"
      @deselect="$emit('deselect', card.id)"
      @select="$emit('select', card.id)"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductsList',

  components: {
    ProductCard,
  },

  props: {
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

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>
