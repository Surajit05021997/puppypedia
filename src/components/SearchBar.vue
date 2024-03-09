<template>
  <div class="search-container">
    <input type="text" class="search-bar" v-model.trim="searchInput" @keyup.enter="handleBreedSearch">
    <div class="search-icon-container" @click="handleBreedSearch">
      <img src="@/assets/icons/search.svg" alt="Search Icon" class="seach-icon">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import  { useBreedStore } from '@/store/breedStore.js';

let searchInput = ref('');

const breedStore = useBreedStore();

function handleBreedSearch() {
  if(searchInput.value) {
    breedStore.getBreedDetailsAction(searchInput.value);
  }
}
</script>

<style scoped>
.search-container {
  position: relative;
  max-width: 500px;
}

.search-bar {
  height: 3rem;
  width: 100%;
  border-radius: 8px;
  padding: 0 8px;
  border: 2px solid var(--clr-primary-900);
}

.search-icon-container {
  width: 4rem;
  background-color: var(--clr-primary-900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}

.seach-icon {
  width: 2rem;
  height: 3rem;
  margin: auto;
}
</style>