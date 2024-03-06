<template>
  <section class="fact-tile">
    <h2>Did you know</h2>
    <p class="mb-2">{{ factsStore.fact }}</p>
    <p>Do you want to know more facts about dog?</p>
    <button v-if="factsStore.moreFactsList" @click="getMoreFacts">Refresh Facts</button>
    <button v-else @click="getMoreFacts">Why not!</button>
    <div v-if="factsStore.moreFactsList">
      <ul>
        <li v-for="fact in factsStore.moreFactsList" :key="fact">
          <img class="list-style" src="@/assets/icons/puppypedia_logo.svg">
          <p>{{ fact }}</p>
        </li>
      </ul>
      
    </div>
  </section>
</template>

<script setup>
import { useFactsStore } from '@/store/factsStore';

const factsStore = useFactsStore();

function getMoreFacts() {
  factsStore.getRandomFactsAction(10);
}
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

button {
  padding: 8px 16px;
  margin-block: 8px;
  background-color: var(--clr-primary-600);
  color: var(--clr-primary-900);
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: var(--fw-semi-bold);
  cursor: pointer;
  border: 2px solid var(--clr-primary-600);
  transition: all 250ms;
}

button:hover {
  background-color: var(--clr-primary-800);
  color: var(--clr-primary-600);
  border: 2px solid var(--clr-primary-800);
}

li {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-block: 8px;
}

.list-style {
  width: 24px;
}
</style>
