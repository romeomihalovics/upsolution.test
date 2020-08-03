import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Fooldal',
    component: Home
  },
  {
    path: '/edessegek',
    name: 'Edessegek',
    component: function () {
      return import(/* webpackChunkName: "candies" */ '../views/Candies.vue')
    }
  },
  {
    path: '/kapcsolat',
    name: 'Kapcsolat',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    }
  },
  {
    path: '/gyik',
    name: 'Gyik',
    component: function () {
      return import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
    }
  },
  {
    path: '/termek',
    redirect: '/edessegek'
  },
  {
    path: '/termek/:id',
    name: 'Termek',
    component: function () {
      return import(/* webpackChunkName: "single" */ '../views/Single.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
