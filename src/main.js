// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from '@/lib/mint'
import store from '@/store/index'
import axios from '@/lib/axios'
import VueToast from 'vue2-toast'
import 'vue2-toast/lib/toast.css'
import exif from 'exif-js' //用于获取拍摄图片的基本信息（例如：拍摄方向）

Vue.use(VueToast, {
  defaultType: 'center'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ElementUI,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
