<template>
  <div class="stat-bar">
    <span>{{ props.statName }}</span>
    <div class="slider">
      <div class="slider-bar" v-for="n in props.statValue" :key="n"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  statName: {
    type: String,
    required: true,
  },
  statValue: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.slider {
  height: 16px;
  display: flex;
  border-radius: 24px;
  border: 2px solid var(--clr-neutral-900);
}

.slider-bar {
  width: 20%;
  background-color: var(--clr-primary-600);
  border: 2px solid var(--clr-neutral-900);
}

.slider-bar:first-child {
  border-radius: 24px 0 0 24px;
}

.slider-bar:last-child {
  border-radius: 0 24px 24px 0;
}

.slider-bar:only-child {
  border-radius: 24px;
}
</style>
