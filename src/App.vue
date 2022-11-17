<script>
import AppHeader from './components/AppHeader.vue';
import AppCharacterList from './components/AppCharacterList.vue';
import AppFilterCategory from './components/AppFilterCategory.vue';
import {store} from './data/store';
import {getApiData} from './data/dataMethods';

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
      getApiData
    }
  },
  methods: {
    getCharacterList() {
      store.isLoaded = false;
      getApiData(store.apiUrl).then((results) => {
        store.CharactersData = results.data;
        store.CharactersDataLength = store.CharactersData.length;
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
    <AppFilterCategory/>
    <AppCharacterList/>
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>