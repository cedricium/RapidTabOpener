import Vue from 'vue';
import Popup from './Popup.vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import store from '@/store/store';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  store,
  render: h => h(Popup)
}).$mount('#app');
