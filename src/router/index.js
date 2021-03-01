import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieMark from '../components/MovieMark.vue';
import Film from '../components/Film.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MovieMark',
    component: MovieMark,
  },
  {
    path: '/Film',
    name: 'Film',
    component: Film,
    params: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

});

export default router;
