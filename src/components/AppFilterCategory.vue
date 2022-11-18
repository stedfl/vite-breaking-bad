<script>
import {store} from '../data/store';
export default {
  name: 'AppFilterCategory',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <select v-model="store.statusSearch" @change="$emit('search')" class="form-select my-5" aria-label="Default select example">
      <option selected value="">Select Category</option>
      <option v-for="category, index in store.Categories" :key="index" :value="category">{{category}}</option>
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