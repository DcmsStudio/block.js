import './block.scss'

import Vue from 'vue'
import Buefy from 'buefy'
import ReactiveProvide from 'vue-reactive-provide'

import BlockComp from './Block.vue'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
Vue.use(ReactiveProvide)

export const Block = BlockComp
export default { Block: BlockComp }
