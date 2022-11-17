<script>
import {categories} from '../data/data'; 
export default {
  name: 'AppFilterCategory',
  data() {
    return {
      categories
    }
  }
}
</script>

<template>
  <div class="container">
    <select class="form-select my-5" aria-label="Default select example">
      <option selected>Select Category</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
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