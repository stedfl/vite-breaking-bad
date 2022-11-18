<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppCharacterList from './components/AppCharacterList.vue';
import AppFilterCategory from './components/AppFilterCategory.vue';
import {store} from './data/store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppCharacterList,
    AppFilterCategory
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacterList() {
      axios.get(store.apiUrl)
        .then((results) => {
          store.charactersData = results.data;
          store.filteredData = store.charactersData;
          if(!store.categoriesList.length || !store.statusList.length ) {
            store.charactersData.forEach((character) => {
              if(!store.categoriesList.includes(character.category)) {
                store.categoriesList.push(character.category)
              };
              if (!store.statusList.includes(character.status)) {
                store.statusList.push(character.status)
              }
            })
          }
          store.isLoaded = true;
      })
    },
    getSelectedCategory() {
      store.isLoaded = false;
      axios.get(store.apiUrl, {
        params: {
          category: store.categorySearch,
        }
      })
      .then((results) => {
          store.charactersData = results.data;
          this.getSelectedStatus();
          store.isLoaded = true;
      })
    },
    getSelectedStatus() {
      store.isMoreInfo = false;
      if(!(store.statusSearch === "")) {
        store.filteredData = store.charactersData.filter((character) => character.status === store.statusSearch);
      } else {
        store.filteredData = store.charactersData;
      }
    }
  },
  mounted() {
    this.getCharacterList();
  }
}
</script>

<template>
  <AppHeader/>
  <main class="pb-5">
    <AppFilterCategory @searchCategory="getSelectedCategory" @searchStatus="getSelectedStatus"/>
    <AppCharacterList/>
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>