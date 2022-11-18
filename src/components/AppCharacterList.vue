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
      store,
      isOutputResult: false
    }
  },
  computed: {
    outputResultsData() {
      let esseLetter = '';
      if(store.filteredData.length) {
        this.isOutputResult = true;
        if (store.filteredData.length > 1) {
          esseLetter = 's'
        }
        return `Found ${store.filteredData.length} Character${esseLetter}`;
      }
      this.isOutputResult = false;
      return "No Characters Found"
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="store.isLoaded" class="container-cards p-5">
      <div class="number-results p-2">
        <h3>{{outputResultsData}} <span class="infos" v-if="isOutputResult"> - Click on card for more infos</span></h3>
      </div>
      <div class="row">
        <CharacterPrint v-for="character in store.filteredData" :key="character.char_id" :character='character'/>
      </div>
      <MoreCardInfo v-if="store.isMoreInfo" />

    </div>
    <div v-else class="loading-container d-flex align-items-center">
      <Loading/>
      <span class="ms-2 loading">{{store.title}} is Loading</span>
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

.infos {
  font-style: italic;
  font-weight: 300;
  font-size: 1rem;
}

h3, .loading {
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