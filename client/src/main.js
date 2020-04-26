import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGoogleCharts from 'vue-google-charts';
import VueI18n from 'vue-i18n';
import { LMap, LTileLayer, LMarker, LTooltip, LPopup, LControl, LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faMapMarkedAlt, faBars, faWindowClose, faUserCircle, faChartBar }from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueGoogleCharts);
Vue.use(BootstrapVue);
Vue.use(VueI18n);

Vue.use(IconsPlugin);
library.add(faListUl, faMapMarkedAlt, faBars, faWindowClose, faUserCircle, faChartBar);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.prototype.$GCategorys = ["Shopping","Medicine","Posting","Call","Supplies","GPConsultation","Others"];

export const eventBus = new Vue();

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-popup', LPopup);
Vue.component('l-control', LControl);
Vue.component('l-icon', LIcon);

Vue.config.productionTip = false

// i18n 
const messages = {
  English: require('@/i18n/en.json'),
  简体中文: require('@/i18n/cn.json')
};

const i18n = new VueI18n({
  locale: 'English',
  messages
});

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
