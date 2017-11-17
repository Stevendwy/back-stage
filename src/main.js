// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/index'
import VueToast from 'vue2-toast'
import 'vue2-toast/lib/toast.css'

// import router from './router'

// Vue.config.productionTip = false

Vue.use(VueToast, {
  defaultType: 'center'
})
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  template: '<App/>',
  components: { App }
})
