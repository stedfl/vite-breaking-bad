<script>
import {store} from '../data/store';
import CharacterPrint from './CharacterPrint.vue'
export default {
  name: 'AppCharacterList',
  components: {
    CharacterPrint
  },
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
      <h3>Found {{store.CharactersDataLength}} characters</h3>
    </div>
    <div class="row">
      <CharacterPrint v-for="character in store.CharactersData" :key="character.char_id" :character='character'/>
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