import { defineStore } from 'pinia';
import {
  getBreedDetailsService
} from '@/service/service';

const useBreedStore = defineStore('breed', {
  state: () => ({
    subBreedList: null,
    isBreedLoading: false,
    breedError: null,
  }),
  actions: {
    async getBreedDetailsAction(breedName) {
      try {
        this.isBreedLoading = true;
        const response = await getBreedDetailsService(breedName);
        this.subBreedList = response.data;
        console.log(this.subBreedList);
      } catch(error) {
        this.breedError = error;
      } finally {
        this.isBreedLoading = false;
      }
    },
  }
});

export { useBreedStore };
