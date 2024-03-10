<template>
  <div class="popular-dogs-slider-container">
    <img class="left-arrow show" src="@/assets/icons/arrow.svg" alt="Left Arrow" @click="scrollRight">
    <section ref="slider" class="popular-dogs-slider">
      <div class="dog-card" v-for="dog in popularDogs" :key="dog.breed">
        <img class="dog-category-image" :src="images[`${dog.imgSrc}`]" alt="Dog Image">
        <div class="overlay" @click="handlePopularBreedClick(dog.breed)">
          <span>
            {{ dog.breed }}
          </span>
        </div>
      </div>
    </section>
    <img class="right-arrow show" src="@/assets/icons/arrow.svg" alt="Right Arrow" @click="scrollLeft">
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBreedStore } from '@/store/breedStore';
import { filename } from 'pathe/utils';

const slider = ref(null);
const router = useRouter();
const breedStore = useBreedStore();

const popularDogs = [
  {
    breed: 'Labrador Retriever',
    imgSrc: 'labrador-retriever'
  },
  {
    breed: 'German Shepherd',
    imgSrc: 'german-shepherd'
  },
  {
    breed: 'Golden Retriever',
    imgSrc: 'golden-retriever'
  },
  {
    breed: 'Bulldog',
    imgSrc: 'bulldog'
  },
  {
    breed: 'Beagle',
    imgSrc: 'beagle'
  },
];

const glob = import.meta.glob('@/assets/images/popular_dogs/*.jpg', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

function scrollLeft() {
  slider.value.scrollLeft += 300;
}

function scrollRight() {
  slider.value.scrollLeft -= 300;
}

function handlePopularBreedClick(dogBreed) {
  breedStore.searchInput = dogBreed;
  breedStore.getBreedDetailsAction(dogBreed);
  router.push({
    name: 'breeds',
    query: {
      breedName: dogBreed,
    }
  });
}
</script>

<style scoped>
.popular-dogs-slider-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.left-arrow, .right-arrow {
  width: 48px;
  cursor: pointer;
  display: none;
}

.left-arrow:hover, .right-arrow:hover {
  filter: invert(69%) sepia(65%) saturate(584%) hue-rotate(208deg) brightness(83%) contrast(84%);
}

.left-arrow:active, .right-arrow:active {
  filter: initial;
}

.right-arrow {
  transform: rotate(180deg);
}

.popular-dogs-slider {
  padding: 8px 0;
  display: flex;
  gap: 24px;
  overflow-x: scroll;
  /*For IE and Edge*/
  -ms-overflow-style: none;
  /*For Firefox*/
  scrollbar-width:none;
  position: relative;
  scroll-behavior: smooth;
}

/*For Chrome, Opera*/
.popular-dogs-slider::-webkit-scrollbar {
  display: none;
}

.dog-card {
  width: 250px;
  flex-shrink: 0;
  position: relative;
}

.dog-category-image {
  border-radius: 8px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 250ms;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-primary-600);
  font-weight: var(--fw-bold);
}

.overlay:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

@media (min-width: 768px) {
  .left-arrow.show, .right-arrow.show{
    display: block;
  }
}

@media (min-width: 1024px) {
  .dog-card {
    width: 350px;
  }
}
</style>