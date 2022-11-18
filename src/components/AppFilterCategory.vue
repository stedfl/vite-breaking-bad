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
    <div class="row">
      <div class="col-auto">
        <select v-model="store.categorySearch" @change="$emit('searchCategory')" class="form-select my-5" aria-label="Default select example">
          <option selected value="">Select Category</option>
          <option v-for="category, index in store.categoriesList" :key="index" :value="category">{{category}}</option>
        </select>
      </div>
      <div class="col-auto">
        <select v-model="store.statusSearch" @change="$emit('searchStatus')" class="form-select my-5" aria-label="Default select example">
          <option selected value="">Select Status</option>
          <option v-for="status, index in store.statusList" :key="index" :value="status">{{status}}</option>
        </select>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

</style>