import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCars from './containers/AppCars.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars', name: 'home' },
  { path: '/cars', component: AppCars, name: 'cars' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})