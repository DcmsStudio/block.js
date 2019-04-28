import Vue from 'vue'
import Buefy from 'buefy'
import ReactiveProvide from 'vue-reactive-provide'

import './block.scss'
import BlockComp from './Block.vue'

Vue.use(Buefy)
Vue.use(ReactiveProvide)

export const Block = BlockComp
export default { Block: BlockComp }
