<script>
import AppHeader from './components/AppHeader.vue';
import AppCharacterList from './components/AppCharacterList.vue';
import AppFilterCategory from './components/AppFilterCategory.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppCharacterList,
    AppFilterCategory
  },
  data() {
    return {
      title: 'Breaking Bad'
    }
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