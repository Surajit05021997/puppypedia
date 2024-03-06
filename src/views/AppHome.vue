<template>
  <h2>Popular Breeds</h2>
  <PopularDogsSlider />
  <FactTile v-if="factsStore.fact" />
</template>

<script setup>
import { onMounted } from 'vue';
import PopularDogsSlider from '@/components/PopularDogsSlider.vue';
import FactTile from '@/components/FactTile.vue';
import { useFactsStore } from '@/store/factsStore';

const factsStore = useFactsStore();
onMounted(() => {
  factsStore.getRandomFactsAction();
});
</script>