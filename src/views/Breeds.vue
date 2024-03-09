<template>
  <LoadingScreen v-if="breedStore.isBreedLoading"/>
  <h1>Breeds</h1>
  <SearchBar />
  <div class="breed-container" v-if="breedStore.subBreedList && breedStore.subBreedList.length">
    <BreedTile v-for="subBreed in breedStore.subBreedList" :key="subBreed.name" :breedDetails="subBreed"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useBreedStore } from '@/store/breedStore';
import SearchBar from '@/components/SearchBar.vue';
import BreedTile from '@/components/BreedTile.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';

const route = useRoute();
const breedStore = useBreedStore();

onMounted(() => {
  if(route.query.breedName) {
    breedStore.getBreedDetailsAction(route.query.breedName);
  }
});
</script>

<style scoped>
.breed-container {
  margin-block: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>