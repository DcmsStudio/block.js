import Vue from 'vue'
import './block'
import './css-editor'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
