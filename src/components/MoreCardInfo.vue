<script>
import {store} from '../data/store';
export default {
  name: 'MoreCardInfo',
  data() {
    return {
      store
    }
  }

}
</script>

<template>
  <div class="info-card rounded rounded-3 p-4">
    <h1>{{store.objectInfo.name}}</h1>
    <ul class="info ps-0">
      <li>Category: {{store.objectInfo.category}}</li>
      <li>Status: {{store.objectInfo.status}}</li>
      <li>Portrayed: {{store.objectInfo.portrayed}}</li>
      <li class="d-flex">
        <span>Appearance:</span>
        <ul>
          <li v-for="(season, index) in store.objectInfo.appearance" :key="index">{{season}}° Season</li>
        </ul>
      </li>
    </ul>
    <button @click="store.isMoreInfo=!store.isMoreInfo" type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
  </div>
</template>
<style lang="scss" scoped>

.info-card {
  position: fixed;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2e3a46;
  color: white;
  border: 1px solid white;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.info {
  list-style: none;
}
</style>