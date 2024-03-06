import { defineStore } from "pinia";
import  { getRandomFactsService } from '@/service/service';

const useFactsStore = defineStore('facts', {
  state: () => {
    return {
      fact: null,
    }
  },
  actions: {
    async getRandomFactsAction() {
      const response = await getRandomFactsService();
      this.fact = response .data.facts[0];
    }
  }
});

export { useFactsStore };
