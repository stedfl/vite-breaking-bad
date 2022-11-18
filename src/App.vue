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
      store.isLoaded = false;
      axios.get(store.apiUrl)
        .then((results) => {
          store.CharactersData = results.data;
          store.isLoaded = true;
          if(!store.Categories.length) {
            store.CharactersData.forEach((character) => {
              if(!store.Categories.includes(character.category)) {
                store.Categories.push(character.category)
              }
            })
          }
      })
    },
    getSelectedCharacter() {
      store.isLoaded = false;
      axios.get(store.apiUrl, {
        params: {
          category: store.statusSearch
        }
      })
      .then((results) => {
          store.CharactersData = results.data;
          store.isLoaded = true;
      })
    },
    getSelectOption() {
      axios.get(store.apiUrl)
        .then((results) => {
          store.CharactersData = results.data;
          store.isLoaded = true;
      })
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
    <AppFilterCategory @search="getSelectedCharacter"/>
    <AppCharacterList/>
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>