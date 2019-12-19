import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
// import VueI18n from 'vue-i18n'
import i18n from './assets/i18n/index'
import router from './router/index';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/css/index.css"

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
