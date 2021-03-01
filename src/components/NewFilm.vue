<template>
  <div style="text-align: start;">
    <div v-show="!movieCreationWindow">
      <v-btn
        text
        @click="() => movieCreationWindow = true"
      >
        Add movie
      </v-btn>
    </div>
    <div v-show="movieCreationWindow">
      <CreateRedactMovie
        :movie="movie"
        @redact-movie="redactMovie"
      />
      <v-btn
        text
        @click="close"
      >
        Close
      </v-btn>
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import CreateRedactMovie from './CreateRedactMovie.vue';
import PostsService from '../services/PostsService';

export default {
  components: {
    CreateRedactMovie,
  },
  data() {
    return {
      movieCreationWindow: false,
      movie: {
        id: '',
        nameMovie: '',
        descriptionMovie: '',
        genreMovie: '',
        posterMovie: null,
        movieMovie: null,
      },
      options: store.state.options,
    };
  },

  store,

  methods: {
    // new movie
    async newPosts(movie) {
      const response = await PostsService.newPosts({
        nameMovie: movie.nameMovie,
        descriptionMovie: movie.descriptionMovie,
        genreMovie: movie.genreMovie,
        posterMovie: movie.posterMovie,
      });
      const {
        _id, nameMovie, descriptionMovie, genreMovie, posterMovie,
      } = response.data;
      this.movie = {
        id: _id,
        nameMovie,
        descriptionMovie,
        genreMovie,
        posterMovie,
        movieMovie: movie.movieMovie,
      };
    },

    // new movie

    redactMovie(movie) {
      this.movieCreationWindow = false;
      this.newPosts(movie);
      store.commit('increment', this.movie);
      this.$emit('snack-bar');
    },

    close() {
      this.movieCreationWindow = false;
      this.movie.nameMovie = '';
      this.movie.descriptionMovie = '';
      this.movie.genreMovie = '';
      this.movie.posterMovie = null;
      this.movie.movieMovie = null;
    },
  },
};
</script>

<style>
</style>
