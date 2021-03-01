<template>
  <div>
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card
        ref="form"
        class="createMovie"
      >
        <v-card-text
          style="padding-bottom: 0px;"
        >
          <v-text-field
            v-model="movies.nameMovie"
            label="Name movie"
            hide-details="auto"
          />
          <v-text-field
            v-model="movies.descriptionMovie"
            label="Description movie"
            hide-details="auto"
          />
          <v-select
            v-model="movies.genreMovie"
            :items="options"
            color="pink"
            label="Genre movie"
            required
          />
          <input
            type="file"
            accept="image/jpeg"
            @change="uploadImage"
          >
          <input
            type="file"
            accept="video/mp4"
            @change="uploadVideo"
          >
        </v-card-text>
        <v-divider class="mt-12" />
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="$emit('redact-movie', movies)"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import store from '../store/store';

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  store,
  data() {
    return {
      options: store.state.options,
      movies: {},
    };
  },
  mounted() {
    this.movies.id = this.movie.id;
    this.movies.nameMovie = this.movie.nameMovie;
    this.movies.descriptionMovie = this.movie.descriptionMovie;
    this.movies.genreMovie = this.movie.genreMovie;
    this.movies.posterMovie = this.movie.posterMovie;
    this.movies.movieMovie = this.movie.movieMovie;
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (el) => {
        this.movies.posterMovie = el.target.result;
      };
    },
    uploadVideo(e) {
      const video = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(video);
      reader.onload = (el) => {
        this.movies.movieMovie = el.target.result;
      };
    },
  },
};
</script>

<style>
  .createMovie {
    height: 340px;
    width: 300px;
    display: table-caption;
    text-align: start;
  }
</style>
