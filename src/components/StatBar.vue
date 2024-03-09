<template>
  <div class="stat-bar">
    <div class="stat-container">
      <span class="stat-name">{{ props.statName }}</span>
      <img class="info-icon" src="@/assets/icons/info.svg" alt="Info Icon" @click="toogleInfoBox">
      <div class="info-box" v-if="infoToggle">
        <img class="info-box-triangle" src="@/assets/icons/triangle.svg" alt="">
        <p>{{ infoText[props.statName] }}</p>
      </div>
    </div>
    <div class="slider">
      <div class="slider-bar" v-for="n in props.statValue" :key="n"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const infoToggle = ref(false);
const infoText = {
  Energy: 'How much energy the breed has.',
  Barking: 'How vocal the breed is.',
  Protectiveness: 'How likely the breed is to alert strangers.',
  Trainability: 'How easy it is to train the breed.',
  Shedding: 'How much hair the breed sheds.',
}

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

function toogleInfoBox() {
  infoToggle.value = !infoToggle.value;
}
</script>

<style scoped>
.stat-container {
  display: flex;
  align-items: center;
  gap: 8px;
  width:fit-content;
  position: relative;
}

.stat-name{
  color: var(--clr-primary-600);
}

.info-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.info-box {
  width: 300px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: var(--clr-primary-600);
  position: absolute;
  top: -8px;
  right: -324px;
}

.info-box-triangle {
  width: 48px;
  position: absolute;
  top: 0;
  left: -30px;
}

.slider {
  height: 16px;
  display: flex;
  border-radius: 24px;
  border: 2px solid var(--clr-primary-600);
}

.slider-bar {
  width: 20%;
  background-color: var(--clr-primary-600);
  border-left: 2px solid var(--clr-neutral-900);
  border-right: 2px solid var(--clr-neutral-900);
}

.slider-bar:first-child {
  border-left: 0px;
  border-radius: 24px 0 0 24px;
}

.slider-bar:last-child {
  border-right: 0px;
  border-radius: 0 24px 24px 0;
}

.slider-bar:only-child {
  border-radius: 24px;
  border: 0px;
}
</style>
