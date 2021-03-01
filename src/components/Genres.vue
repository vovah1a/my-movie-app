<template>
  <div class="col-md-2 col-6">
    <div
      v-show="!isEditing"
      class="content"
    >
      <div
        class="poster"
        :style="{'background': 'no-repeat center url(' +movie.posterMovie + ')' }"
      >
        <button
          class="redactMovie"
          @click="() => isEditing=true"
        >
          ...
        </button>
        <span
          type="button"
          class="deleteMovie"
          @click="$emit('delete-movie', movie)"
        >X</span>
        <div id="nav">
          <router-link :to="{name: 'Film', query : { movie }}">
            <span class="circle">
              <span class="triangle" />
            </span>
          </router-link>
        </div>
      </div>
      <h3>{{ movie.nameMovie }}</h3>
    </div>
    <div
      v-show="isEditing"
      class="content"
    >
      <CreateRedactMovie
        :movie="movie"
        @redact-movie="redactMovie"
      />
      <button @click="() => isEditing=false">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import CreateRedactMovie from './CreateRedactMovie.vue';

export default {
  components: {
    CreateRedactMovie,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  store,

  data() {
    return {
      isEditing: false,
      options: store.state.options,
    };
  },

  methods: {
    redactMovie(movie) {
      this.isEditing = !this.isEditing;
      this.$emit('redact-movie', movie);
    },
  },
};
</script>

<style lang="scss">
  .col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 300px;
    margin: 10px 10px 0 10px;
    height: 400px;
  }

  .poster {
    height: 300px;
    background-size: cover;
    margin-bottom: 20px;
  }
  .content{
    height: 420px;
    width: 300px;
  }

  .deleteMovie {
      background-color: rgba(0, 0, 0, 0.37);
      color: red;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      float: right;
  }

  .redactMovie {
      background-color: rgba(255, 255, 255, 0.404);
      width: 22px;
      height: 22px;
      border-radius: 50%;
      float: left;
  }

  #nav {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center
  }

  #nav .circle {
      display: inline-block;
      border: transparent;
      border-radius: 25px;
      padding: 20px;
      height: 10px;
      width: 10px;
  }

  #nav .circle .triangle {
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: transparent;
      transform: translate(-25%, -50%);
  }

  #nav:hover .circle {
      border: 3px solid white;
      transition: 0.3s;
  }

  #nav:hover .triangle {
      border-left: 10px solid white;
      transition: 0.3s;
  }
</style>
