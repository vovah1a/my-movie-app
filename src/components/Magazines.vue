<template>
  <div class="container">
    <v-snackbar
      v-model="snackbar"
      absolute
      color="primary"
      right
      top
      text
    >
      Movie delete!!!
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <div
      v-for="option in options.filter(e => moviegenre(e))"
      :key="option"
      class="row"
    >
      <div class="mt-2 col col-12">
        {{ option }}
      </div>
      <v-sheet
        class="mx-auto"
        elevation="8"
        width="90%"
        draggable
      >
        <i class="fa fa-chevron-up" />
        <v-btn
          color="primary"
          text
          @click="up(option)"
        >
          UP
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="down(option)"
        >
          DOWN
        </v-btn>

        <v-slide-group
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(movie, key) in movies.filter(t => t.genreMovie === option)"
            :key="key"
          >
            <Genres
              :option="option"
              :movie="movie"
              @delete-movie="deleteMovie"
              @redact-movie="redactMovie"
            />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import Genres from './Genres.vue';
import PostsService from '../services/PostsService';

export default {
  name: 'ImageUpload',
  components: {
    Genres,
  },
  store,

  data() {
    return {
      snackbar: false,
      movies: store.state.movies,
      mouseDownMovie: false,
      dragEvent: null,
      extendOriginal: null,
      options: store.state.options,
    };
  },

  methods: {
    async deletePost(id) {
      await PostsService.deletePost({
        id,
      });
    },
    deleteMovie(movie) {
      this.deletePost(String(movie.id));
      this.movies = this.movies.filter((t) => t.id !== movie.id);
      store.commit('deleteMovie', this.movies);
      this.snackbar = true;
    },
    moviegenre(option) {
      return ((store.state.movies.filter((t) => t.genreMovie === option)).length > 0);
    },
    redactMovie(movie) {
      store.commit('redactMovie', movie);
    },
    down(option) {
      store.commit('downOptions', option);
      this.$forceUpdate();
    },
    up(option) {
      store.commit('upOptions', option);
      this.$forceUpdate();
    },
  },
};
</script>

<style>
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
}

.v-application .mt-2 {
    margin-top: 8px !important;
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
    font-size: 20pt
}
</style>
