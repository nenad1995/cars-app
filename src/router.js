import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCars from './containers/AppCars.vue'
import AddCar from './containers/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars', name: 'home' },
  { path: '/cars', component: AppCars, name: 'cars' },
  { path: '/add', component: AddCar, name: 'add' },
  { path: '/edit/:id', component: AddCar, name: 'edit' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})