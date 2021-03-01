import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/store';
import router from './router';
import eslintrc from '../.eslintrc';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  eslintrc,
  render: (h) => h(App),
}).$mount('#app');
