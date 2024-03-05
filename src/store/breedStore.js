import { defineStore } from 'pinia';
import {
  getBreedDetailsService
} from '@/service/service';

const useBreedStore = defineStore('breed', {
  state: () => ({
    breedDetails: null,
  }),
  actions: {
    async getBreedDetailsAction(breedName) {
      const response = await getBreedDetailsService(breedName);
      this.breedDetails = response.data[0];
      console.log(this.breedDetails);
    },
  }
});

export { useBreedStore };
