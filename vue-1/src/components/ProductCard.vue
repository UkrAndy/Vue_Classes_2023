<template>
  <div class="container">
    <img :src="productData.imgSrc" />

    <div>
      <div>{{ productData.title }}</div>
      <div class="action-section">
        <div :class="priceClass">{{ productData.price }}</div>
        <button @click="onClick">{{ buttonLabel }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    buttonLabel() {
      return this.isSelected ? 'X' : '+'
    },
    priceClass() {
      return this.productData.price < 1000 ? 'low-price' : 'high-price'
    },
  },

  methods: {
    onClick() {
      if (this.isSelected) this.$emit('deselect')
      else this.$emit('select')
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  width: 100px;
  height: 200px;
  border: 2px solid blue;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
}
.container img {
  width: 100%;
}
.action-section {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.low-price {
  color: green;
}
.high-price {
  color: red;
  background-color: blue;
}
</style>
