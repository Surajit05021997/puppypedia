<template>
  <section class="fact-tile">
    <h2>Did you know</h2>
    <p>{{ factsStore.fact }}</p>
  </section>
</template>

<script setup>
import { useFactsStore } from '@/store/factsStore';

const factsStore = useFactsStore();
</script>

<style scoped>
h2 {
  color: var(--clr-primary-600);
}

.fact-tile {
  padding: 16px 24px;
  background-color: var(--clr-primary-900);
  color: var(--clr-primary-600);
  border-radius: 8px;
  margin-block: 24px;
}

.fact-tile p {
  padding-inline: 16px;
}
</style>
