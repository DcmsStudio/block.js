import './block.scss'

import Vue from 'vue'
import ReactiveProvide from 'vue-reactive-provide'

import * as pluginApi from '@/plugins'
import BlockComp from './Block.vue'
import BlockComponent from '@/components/BlockComponentProd.vue'
import BlockPlaceholder from '@/components/BlockPlaceholderProd.vue'

Vue.use(ReactiveProvide)

Vue.component('bj-block-component', BlockComponent)
Vue.component('bj-block-placeholder', BlockPlaceholder)

delete BlockComp.inject
BlockComp.reactiveProvide = {
  name: 'blockJS',
  include: [
    'mode',
    'isEditing',
    'data',
  ],
}

export default {
  Block: BlockComp,
  ...pluginApi,
}
