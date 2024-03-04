import Home from '@/views/AppHome.vue';
import Breeds from '@/views/Breeds.vue';
import Health from '@/views/Health.vue';
import Training from '@/views/Training.vue';
import Lifestyle from '@/views/Lifestyle.vue';
import AboutUs from '@/views/AboutUs.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'breeds',
    path: '/breeds',
    component: Breeds,
  },
  {
    name: 'health',
    path: '/health',
    component: Health,
  },
  {
    name: 'training',
    path: '/training',
    component: Training,
  },
  {
    name: 'lifestyle',
    path: '/lifestyle',
    component: Lifestyle,
  },
  {
    name: 'aboutUs',
    path: '/about-us',
    component: AboutUs,
  },
];

export default routes;
