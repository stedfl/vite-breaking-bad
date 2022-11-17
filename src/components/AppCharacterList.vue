<script>
export default {
  name: 'AppCharacterList'
}
</script>

<template>
  <div class="container p-5">
    <div class="number-results p-2">
      <h3>Found n° characters</h3>
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