<template>
  <LoadingScreen v-if="breedStore.isBreedLoading"/>
  <h1>Breeds</h1>
  <SearchBar />
  <div class="breed-container" v-if="breedStore.subBreedList && breedStore.subBreedList.length">
    <BreedTile v-for="subBreed in breedStore.subBreedList" :key="subBreed.name" :breedDetails="subBreed"/>
  </div>
  <div v-if="breedStore.subBreedList !== null && breedStore.subBreedList.length === 0" class="not-found-container">
    <img src="@/assets/icons/not_found_dog.svg" alt="Dog Image">
    <p>No breed found!</p>
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

if(breedStore.subBreedList !== null && breedStore.subBreedList.length === 0) {
  breedStore.subBreedList = null;
}

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

.not-found-container {
  height: calc(100vh - 304px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found-container img {
  width: 200px;
}

.not-found-container p {
  color: var(--clr-primary-900);
  font-size: 2rem;
  font-weight: var(--fw-bold);
}

@media (min-width: 768px) {
  .not-found-container img {
    width: 400px;
  }

  .not-found-container p {
    font-size: 4rem;
  }
}
</style>