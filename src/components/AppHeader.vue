<script>
export default {
  name: 'AppHeader',
  props: {
    title: String
  }
}
</script>

<template>
  <header class="d-flex p-3">
    <img src="Breaking_Bad_logo.svg" alt="logo breaking bad">
    <h1 class="ms-3">{{title}}</h1>
  </header>
  
</template>



<style lang="scss" scoped>
header {
  background-color: white;
}

img {
  height: 50px;
}

h1 {
  font-weight: 700;
}

</style>