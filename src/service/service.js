import axios from 'axios';

const axiosInstnace = axios.create({
  baseURL: 'https://api.api-ninjas.com',
  headers: { 'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY},
});

function getBreedDetailsService(breedName) {
  return axiosInstnace.get(`/v1/dogs?name=${breedName}`);
}

function getRandomFactsService(noOfFacts) {
  return axios.get(`https://dog-api.kinduff.com/api/facts?number=${noOfFacts}`);
}

export { getBreedDetailsService, getRandomFactsService };
