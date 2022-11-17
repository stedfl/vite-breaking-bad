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
      title: 'Breaking Bad',
      getApiData
    }
  },
  mounted() {
    getApiData(store.apiUrl).then((results) => {
      store.CharactersData = results.data;
    })
  }
}
</script>

<template>
  <AppHeader :title='title'/>
  <main>
    <AppFilterCategory/>
    <AppCharacterList/>
  </main>
  
</template>



<style lang="scss">
@use './styles/general.scss' as *;

</style>