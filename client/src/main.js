import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { LMap, LTileLayer, LMarker, LTooltip, LPopup, LControl } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faMapMarkedAlt, faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);

Vue.use(IconsPlugin);
library.add(faListUl, faMapMarkedAlt, faBars, faWindowClose);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.prototype.$GCategorys = ["Shopping","Medicine","Posting","Call","Supplies","GPConsultation","Others"];

export const eventBus = new Vue();

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-popup', LPopup);
Vue.component('l-control', LControl);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
