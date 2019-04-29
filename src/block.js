import './block.scss'

import Vue from 'vue'
import Buefy from 'buefy'
import ReactiveProvide from 'vue-reactive-provide'

import * as pluginApi from '@/plugins'
import BlockComp from './Block.vue'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
Vue.use(ReactiveProvide)

export default {
  Block: BlockComp,
  ...pluginApi,
}
