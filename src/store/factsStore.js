import { defineStore } from "pinia";
import  { getRandomFactsService } from '@/service/service';

const useFactsStore = defineStore('facts', {
  state: () => {
    return {
      fact: null,
      moreFactsList: null,
      factsError: null,
    }
  },
  actions: {
    async getRandomFactsAction(noOfFacts) {
      try {
        const response = await getRandomFactsService(noOfFacts);
        if(response.data.facts.length === 1) {
          this.fact = response.data.facts[0];
        } else {
          this.moreFactsList = response.data.facts;
        }
      } catch(error) {
        this.factsError = error;
      }
    }
  }
});

export { useFactsStore };
