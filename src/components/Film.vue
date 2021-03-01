<template>
  <div>
    <router-link to="/">
      MovieMark
    </router-link>
    <h1>{{ this.$route.query.movie.nameMovie }}</h1>
    <h2>Genre: {{ this.$route.query.movie.genreMovie }}</h2>
    <video
      width="80%"
      controls
    >
      <source
        :src="this.$route.query.movie.movieMovie"
        type="video/mp4"
      >
    </video>
    <h3>Description: {{ this.$route.query.movie.descriptionMovie }}</h3>
  </div>
</template>

<script>

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">

</style>
