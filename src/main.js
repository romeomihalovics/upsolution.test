import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import Paginate from 'vuejs-paginate'
import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'themify-icons-sass/themify-icons/_themify-icons.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VModal)
Vue.use(VueCookies)
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
