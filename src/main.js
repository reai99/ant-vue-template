import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from "@common"
import * as api from './api'
// 全局主题样式
import './assets/themes/style.less'
Vue.config.productionTip = false
Vue.prototype.$api = api;

Vue.use(common);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')