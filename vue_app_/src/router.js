import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import movie_Details from './views/movie_Details.vue';
import Music from './views/Music.vue';
import music_Details from './views/music_Details.vue';
import Book from './views/Book.vue';
import Picture from './views/Picture.vue';
import photo_Details from './views/photo_Details.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/movie/movie_Details',
      name: 'movie_Details',
      component: movie_Details
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/music/music_Details',
      name: 'music_Details',
      component: music_Details
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture
    },
  ],
});
