import { defineStore } from 'pinia';
import {
  getBreedDetailsService
} from '@/service/service';

const useBreedStore = defineStore('breed', {
  state: () => ({
    subBreedList: null,
    searchInput: '',
    isBreedLoading: false,
    breedError: null,
  }),
  actions: {
    async getBreedDetailsAction(breedName) {
      try {
        this.isBreedLoading = true;
        const response = await getBreedDetailsService(breedName);
        this.subBreedList = response.data;
      } catch(error) {
        this.breedError = error;
      } finally {
        this.isBreedLoading = false;
      }
    },
  }
});

export { useBreedStore };
