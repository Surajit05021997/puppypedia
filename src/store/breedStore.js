import { defineStore } from 'pinia';
import {
  getBreedDetailsService
} from '@/service/service';

const useBreedStore = defineStore('breed', {
  state: () => ({
    subBreedList: null,
  }),
  actions: {
    async getBreedDetailsAction(breedName) {
      const response = await getBreedDetailsService(breedName);
      this.subBreedList = response.data;
      console.log(this.subBreedList);
    },
  }
});

export { useBreedStore };
