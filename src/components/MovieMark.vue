<template>
  <div>
    <Scan />
    <NewFilm
      @snack-bar="snackBar"
    />
    <Magazines />
    <v-snackbar
      v-model="snackbar"
      absolute
      color="primary"
      right
      top
      text
    >
      Add new film
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import NewFilm from './NewFilm.vue';
import Scan from './Scan.vue';
import Magazines from './Magazines.vue';
import PostsService from '../services/PostsService';
import store from '../store/store';

export default {
  components: {
    Scan,
    NewFilm,
    Magazines,
  },
  store,
  data() {
    return {
      snackbar: false,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.movies = response.data;
      store.commit('startpush', this.movies);
    },
    snackBar() {
      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss">
  #app {
    text-align: center;
    margin-top: 30px;
  }
  .container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
