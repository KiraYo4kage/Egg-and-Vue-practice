// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//默认文件index，在哪里设置？
import axios from 'axios'
import moment from 'moment'
moment.locale('zh-cn');
Vue.prototype.$moment = moment

Vue.config.productionTip = false
Vue.prototype.$axios = axios//为了在actions中直接调用axios

/* eslint-disable no-new */
var a =new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
