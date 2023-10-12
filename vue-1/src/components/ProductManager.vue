<template>
  <div>
    <div>
      <label>
        Age
        <input
          type="number"
          v-model="personAge"
          :class="{
            'valid-worker': personAge >= 18,
            empty: !personAge,
            [borderClass]: isAgeValid,
          }"
        />
      </label>
      <button
        :style="{
          scale: btnScale,
        }"
        :class="{
          [btnClass]: isAgeValid,
        }"
        :disabled="!isAgeValid"
      >
        Sign up
      </button>
    </div>
    <general-products-list
      title="Загальний список"
      :products-list-data="productDataList"
      @select="onSelect"
    />
    <general-products-list
      title="Список обраних"
      :products-list-data="selectedProductsList"
      is-selected-list
      @deselect="onDeselect"
    />
  </div>
</template>

<script>
import GeneralProductsList from './GeneralProductsList.vue'
export default {
  name: 'ProductManager',
  components: {
    GeneralProductsList,
  },

  data() {
    return {
      personAge: null,
      productDataList: [
        {
          id: 1,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 100,
        },
        {
          id: 2,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 12000,
        },
        {
          id: 3,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 200,
        },
        {
          id: 4,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 12000,
        },
        {
          id: 5,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 12000,
        },
        {
          id: 6,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 12000,
        },
        {
          id: 7,
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXeP4xSG97QuItTbQYcH4jrpSCMD9UyAvw&usqp=CAU',
          title: 'Phone',
          price: 12000,
        },
      ],
      selectedProductsList: [],
    }
  },
  computed: {
    btnScale() {
      return this.personAge ? this.personAge / 100 : 1
    },
    btnClass() {
      return this.personAge <= 45 ? 'young' : 'senior'
    },
    isAgeValid() {
      return this.personAge >= 18
    },

    borderClass() {
      if (this.personAge % 10 === 0) return 'end0'
      if (this.personAge % 10 === 5) return 'end5'
      return 'endDef'
    },
  },

  methods: {
    onSelect(productId) {
      const cardData = this.productDataList.find(
        (item) => item.id === productId
      )
      this.selectedProductsList.push(cardData)
      this.productDataList = this.productDataList.filter(
        (item) => item.id !== productId
      )
    },
    onDeselect(productId) {
      const cardData = this.selectedProductsList.find(
        (item) => item.id === productId
      )
      this.productDataList.push(cardData)
      this.selectedProductsList = this.selectedProductsList.filter(
        (item) => item.id !== productId
      )
    },
  },
}
</script>

<style lang="css" scoped>
.valid-worker {
  background-color: green;
}
.empty {
  background-color: yellow;
}

.young {
  background-color: green;
}
.senior {
  background-color: blue;
}

.end0 {
  border: 3px solid orange;
}
.end5 {
  border: 3px solid blue;
}
.endDef {
  border: 3px solid red;
}
</style>
