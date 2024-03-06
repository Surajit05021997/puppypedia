<template>
  <section class="popular-dogs-slider">
    <div class="dog-card" v-for="dog in popularDogs" :key="dog.breed">
      <img class="dog-category-image" :src="dog.imgSrc" alt="Dog Image">
      <div class="overlay" @click="handlePopularBreedClick(dog.breed)">
        <span>
          {{ dog.breed }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useBreedStore } from '@/store/breedStore';

const router = useRouter();
const breedStore = useBreedStore();

const popularDogs = [
  {
    breed: 'Labrador Retriever',
    imgSrc: 'src/assets/images/labrador-retriever.jpg'
  },
  {
    breed: 'German Shepherd',
    imgSrc: 'src/assets/images/german-shepherd.jpg'
  },
  {
    breed: 'Golden Retriever',
    imgSrc: 'src/assets/images/golden-retriever.jpg'
  },
  {
    breed: 'Bulldog',
    imgSrc: 'src/assets/images/bulldog.jpg'
  },
  {
    breed: 'Beagle',
    imgSrc: 'src/assets/images/beagle.jpg'
  },
];

function handlePopularBreedClick(dogBreed) {
  breedStore.getBreedDetailsAction(dogBreed);
  router.push('/breeds');
}
</script>

<style scoped>
.popular-dogs-slider {
  padding: 8px 0;
  display: flex;
  gap: 24px;
  overflow-x: scroll;
  /*For IE and Edge*/
  -ms-overflow-style: none;
  /*For Firefox*/
  scrollbar-width:none;
}

/*For Chrome, Opera*/
.popular-dogs-slider::-webkit-scrollbar {
  display: none;
}

.dog-card {
  width: 350px;
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
</style>