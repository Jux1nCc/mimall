import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(axios)
Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 请求拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
