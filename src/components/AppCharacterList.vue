<script>
import {store} from '../data/store';
export default {
  name: 'AppCharacterList',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container p-5">
    <div class="number-results p-2">
      <h3>Found n° characters</h3>
    </div>
    <div class="row">
      <div v-for="character in store.CharactersData" :key="character.char_id" class="bb-card col-3">
        <h4>{{character.name}}</h4>
      </div>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  background-color: white;
}

.number-results {
  background-color: #2e3a46;
}

h3 {
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}


</style>