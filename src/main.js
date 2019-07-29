import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './service/ApiService';
import authMiddleware from './middleware/auth';

import VueAWN from "vue-awesome-notifications";
let options = {
  position: 'top-right',
}
Vue.use(VueAWN, options);


import VueI18n from 'vue-i18n';
import viMessage from './lang/vi';
import enMessage from './lang/en';
import {TokenService} from "./service/StorageService";
const lang = localStorage.getItem('language');

Vue.use(VueI18n);
const messages = {
  vi: viMessage,
  en: enMessage,
}
const i18n = new VueI18n({
  locale: lang,
  messages,
  fallbackLocale: 'en',
});

window.axios = require('axios');
ApiService.init(process.env.MIX_BASE_API_URI);

Vue.config.productionTip = false;

authMiddleware();

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');