<template>
  <section class="breed-tile">
    <img :src="props.breedDetails.image_link" alt="Breed Image" class="breed-image">
    <div class="stats-container">
      <span class="breed-name">{{ props.breedDetails.name }}</span>
      <div class="stats">
        <StatBar stat-name="Energy" :stat-value="props.breedDetails.energy" />
        <StatBar stat-name="Shedding" :stat-value="props.breedDetails.shedding" />
        <StatBar stat-name="Barking" :stat-value="props.breedDetails.barking" />
        <StatBar stat-name="Trainability" :stat-value="props.breedDetails.trainability" />
        <StatBar stat-name="Protectiveness" :stat-value="props.breedDetails.protectiveness" />
      </div>
    </div>
  </section>
</template>

<script setup>
import StatBar from '@/components/StatBar.vue';

const props = defineProps({
  breedDetails: {
    type: Object,
    required: true,
  }
});
</script>

<style scoped>
.breed-tile {
  border-radius: 8px;
  background-color: var(--clr-primary-900);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.stats-container {
  flex-grow: 1;
  width: 100%;
}

.breed-image {
  border-radius: 8px;
  max-height: 20rem;
}

.breed-name {
  font-size: 1.5rem;
  font-weight: var(--fw-semi-bold);
  color: var(--clr-primary-600);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 1024px) {
  .breed-tile {
    flex-direction: row;
  }
}
</style>
