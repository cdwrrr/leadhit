import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../components/Auth'
import Analitycs from '../components/Analitycs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authorization',
    component: Auth
  },
  {
    path: '/Analitycs',
    name: 'Analitycs',
    component: Analitycs
  }
]

const router = new VueRouter({
  routes
})

export default router
