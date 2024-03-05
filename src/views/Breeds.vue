<template>
  <h1>Breeds</h1>
  <SearchBar />
  <div v-if="breedStore.subBreedList && breedStore.subBreedList.length">
    <BreedTile v-for="subBreed in breedStore.subBreedList" :key="subBreed.name" :breedDetails="subBreed"/>
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
import BreedTile from '@/components/BreedTile.vue';
import { useBreedStore } from '@/store/breedStore';


const breedStore = useBreedStore();
</script>