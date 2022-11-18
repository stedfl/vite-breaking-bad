<script>
import {store} from '../data/store';
import CharacterPrint from './CharacterPrint.vue';
import Loading from './Loading.vue';
import MoreCardInfo from './MoreCardInfo.vue';
export default {
  name: 'AppCharacterList',
  components: {
    CharacterPrint,
    Loading, 
    MoreCardInfo
  },
  data() {
    return {
      store
    }
  },
  computed: {
    outputResultsData() {
      let esseLetter = '';
      if(store.filteredData.length) {
        if (store.filteredData.length > 1) {
          esseLetter = 's'
        }
        return `Found ${store.filteredData.length} Character${esseLetter}`;
      }
      return "No Characters Found"
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="store.isLoaded" class="container-cards p-5">
      <div class="number-results p-2">
        <h3>{{outputResultsData}}</h3>
      </div>
      <div class="row">
        <CharacterPrint v-for="character in store.filteredData" :key="character.char_id" :character='character'/>
      </div>
      <MoreCardInfo v-if="store.isMoreInfo" />

    </div>
    <div v-else class="loading-container d-flex align-items-center">
      <Loading/>
      <span class="ms-2">{{store.title}} is Loading</span>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-cards {
  background-color: white;
}

.number-results {
  background-color: #2e3a46;
}

h3, span {
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}

.loading-container {
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
</style>