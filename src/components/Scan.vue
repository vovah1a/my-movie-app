<template>
  <form @v-on:submit.prevent="scanMovies">
    <input
      v-model="scanMovie"
      placeholder="Scan movie"
    >
    <button>scan</button>
  </form>
</template>

<script>
export default {

  data() {
    return {
      scanMovie: '',
    };
  },

  methods: {
    scanMovies() {
      this.scanMovie = '';
    },
  },

};
</script>

<style>

</style>
