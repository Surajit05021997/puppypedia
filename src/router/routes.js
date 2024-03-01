import Home from '@/views/AppHome.vue';
import PupBreeds from '@/views/PupBreeds.vue';
import PupHealth from '@/views/PupHealth.vue';
import PupTraining from '@/views/PupTraining.vue';
import PupLifestyle from '@/views/PupLifestyle.vue';
import AboutUs from '@/views/AboutUs.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'pupBreeds',
    path: '/pup-breeds',
    component: PupBreeds,
  },
  {
    name: 'pupHealth',
    path: '/pup-health',
    component: PupHealth,
  },
  {
    name: 'pupTraining',
    path: '/pup-training',
    component: PupTraining,
  },
  {
    name: 'pupLifestyle',
    path: '/pup-lifestyle',
    component: PupLifestyle,
  },
  {
    name: 'aboutUs',
    path: '/about-us',
    component: AboutUs,
  },
];

export default routes;
