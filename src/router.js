import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./views/Projects.vue')
  }
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: () => import('./views/Contact.vue')
  // }
  ]
})
