import Vue from 'vue'
import vClickOutside from 'v-click-outside'

import './block'
import './css-editor'
import App from './App.vue'


Vue.use(vClickOutside)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
