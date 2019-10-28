import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './service/ApiService';
import authMiddleware from './middleware/auth';

// init vue-awesome-notifications library
import VueAWN from "vue-awesome-notifications";
let options = {
  position: 'top-right',
}
Vue.use(VueAWN, options);

// init vue-i18n library
import VueI18n from 'vue-i18n';
import viLabels from './lang/vi/labels';
import enLabels from './lang/en/labels';
const lang = localStorage.getItem('language');
Vue.use(VueI18n);
const messages = {
  vi: viLabels,
  en: enLabels,
}
const i18n = new VueI18n({
  locale: lang,
  messages,
  fallbackLocale: 'en',
});

// init vee-validate library
import viValidation from './lang/vi/validation';
import enValidation from './lang/en/validation';
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    vi: viValidation,
    en: enValidation,
  }
});

// init axios library
window.axios = require('axios');
ApiService.setApiBaseUrl(process.env.MIX_BASE_API_URI);
ApiService.setToken();

Vue.config.productionTip = false;

// authMiddleware();

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');