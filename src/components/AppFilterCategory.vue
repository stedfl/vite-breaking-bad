<script>
import {categories} from '../data/data'; 
import {store} from '../data/store';
export default {
  name: 'AppFilterCategory',
  data() {
    return {
      categories,
      store
    }
  },
  methods: {
    selectValue(value) {
      console.log(value);
    }
  }
}
</script>

<template>
  <div class="container">
    <select v-model="store.statusSearch" @change="$emit('search')" class="form-select my-5" aria-label="Default select example">
      <option selected value="">Select Category</option>
      <option v-for="category in categories" :key="category.id" :value="category">{{category}}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.form-select {
  width: 25%;
}
@media screen and (max-width: 768px) {
  .form-select {
    width: 100%;
  }
}
</style>