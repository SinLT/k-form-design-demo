import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import KFormDesign from 'k-form-design-mini'
import './components_use'
console.log(KFormDesign)
Vue.config.productionTip = false
Vue.use(KFormDesign)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
