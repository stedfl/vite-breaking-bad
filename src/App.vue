<script>
import AppHeader from './components/AppHeader.vue';
import AppCharacterList from './components/AppCharacterList.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppCharacterList
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
    <AppCharacterList/>
  </main>
  
</template>



<style lang="scss">
@use './styles/general.scss' as *;

</style>