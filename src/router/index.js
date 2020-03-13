import Vue from 'vue'
import Router from 'vue-router'
import Trust from './../components/Trust.vue'
import Currency from './../components/Currency.vue'
import Technology from './../components/Technology.vue'
import FAQ from './../components/FAQ.vue'
import NotFound from './../components/NotFound.vue'
import Index from './../components/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'bolt-trust',
      path: '/bolt-trust',
      component: Trust
    },
    {
      name: 'bolt-currency',
      path: '/bolt-currency',
      component: Currency
    },
    {
      name: 'technology',
      path: '/technology',
      component: Technology
    },
    {
      name: 'faq',
      path: '/FAQ',
      component: FAQ
    },
    { 
      path: '*', 
      component: NotFound 
    }
  ],
})