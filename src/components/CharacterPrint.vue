<script>
export default {
  name: 'CharacterPrint',
  props: {
    character: Object
  }
}
</script>

<template>
  <div  class="col-3 p-4">
    <div class="bb-card p-3">
      <img :src="character.img" :alt="character.name">
      <h3 class="mt-2">{{character.name}}</h3>
      <h4>{{character.category}}</h4>
      <h5>{{character.status}}</h5>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
img {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.bb-card {
  background-color: $primary-color;
  text-align: center;
}

h3 {
  color:white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
}

h4 {
  color: lighten($primary-color, 10%);
  font-size: 1rem;
}

h5 {
  color: lighten($primary-color, 30%);
  font-size: 0.8rem;
}
</style>