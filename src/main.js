// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/skins/_all-skins.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/js/app.js'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
