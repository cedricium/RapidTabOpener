import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import store from '@/store/store';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
