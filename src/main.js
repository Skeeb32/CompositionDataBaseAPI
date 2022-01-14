import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Three from './components/Three.vue';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(Three),
}).$mount('#three');