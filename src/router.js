//router è uno strumento che permette di navigare tra le pagine di un'applicazione Vue.js
// In questo file definiamo le rotte dell'applicazione
//vue è un front end framework per costruire interfacce utente
// vue-router è una libreria che permette di gestire la navigazione tra le pagine

import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/home.vue'
import About from './views/About.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router