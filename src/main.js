import Vue from 'vue'
import Buefy from 'buefy'
import vClickOutside from 'v-click-outside'
import ReactiveProvide from 'vue-reactive-provide'

import './css-editor'
import './inspector'

import './app.scss'

import App from './App.vue'
import BlockComponent from '@/components/BlockComponent.vue'
import BlockPlaceholder from '@/components/BlockPlaceholder.vue'


Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
Vue.use(vClickOutside)
Vue.use(ReactiveProvide)

Vue.component('bj-block-component', BlockComponent)
Vue.component('bj-block-placeholder', BlockPlaceholder)

new Vue({
  render: h => h(App),
}).$mount('#app')
