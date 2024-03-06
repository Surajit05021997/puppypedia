<template>
  <LoadingScreen v-if="breedStore.isBreedLoading"/>
  <h1>Breeds</h1>
  <SearchBar />
  <div class="breed-container" v-if="breedStore.subBreedList && breedStore.subBreedList.length">
    <BreedTile v-for="subBreed in breedStore.subBreedList" :key="subBreed.name" :breedDetails="subBreed"/>
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
import BreedTile from '@/components/BreedTile.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { useBreedStore } from '@/store/breedStore';


const breedStore = useBreedStore();
</script>

<style scoped>
.breed-container {
  margin-block: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>