<template>
  <section class="breed-tile">
    <img :src="breedImageSrc" alt="Breed Image" class="breed-image">
    <div>
      <StatBar stat-name="Energy" :stat-value="breedDetails?.energy ? breedDetails.energy : 0" />
      <StatBar stat-name="Shedding " :stat-value="breedDetails?.shedding ? breedDetails.shedding : 0" />
      <StatBar stat-name="Barking" :stat-value="breedDetails?.barking ? breedDetails.barking : 0" />
      <StatBar stat-name="Trainability" :stat-value="breedDetails?.trainability ? breedDetails.trainability : 0" />
      <StatBar stat-name="Protectiveness" :stat-value="breedDetails?.protectiveness ? breedDetails.protectiveness : 0" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useBreedStore } from '@/store/breedStore';
import StatBar from '@/components/StatBar.vue';

const breedStore = useBreedStore();
const { breedDetails } = storeToRefs(breedStore);

const breedImageSrc = computed(() => {
  return breedDetails.value?.image_link ? breedDetails.value.image_link : 'src/assets/images/breed-template-image.svg';
});
</script>

<style scoped>
.breed-tile {
  padding: 2rem 0;
  border-radius: 8px;
  background-color: var(--clr-primary-900);
  padding: 16px;
  margin-block: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
}

.breed-image {
  border-radius: 8px;
  height: 20rem;
}
</style>
