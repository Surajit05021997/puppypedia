<template>
  <div class="stat-bar">
    <span>{{ props.statName }}</span>
    <div class="slider">
      <div class="slider-bar" ref="sliderBar"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const sliderBar = ref(null);

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

onMounted(() => {
  sliderBar.value.style.width = (80 * props.statValue) + 'px';
});
</script>

<style scoped>
.stat-bar {
}
.slider {
  display: flex;
  /* width: 750px; */
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid var(--clr-primary-600);
}

.slider-bar {
  width: 0px;
  height: 16px;
  background-color: var(--clr-primary-600);
  transition: width 500ms;
}
</style>
