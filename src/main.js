import Vue from 'vue'
import vClickOutside from 'v-click-outside'

import './block'
import './css-editor'
import './inspector'

import App from './App.vue'


Vue.config.productionTip = false
Vue.use(vClickOutside)

new Vue({
  render: h => h(App),
}).$mount('#app')
