<template>
  <div class="block-js bj-root">
    <component v-for="(block) in blocks"
      :is="block.id"
      :key="block.uuid"
      :data="block" />
  </div>
</template>

<script>
import './block.scss'
import Vue from 'vue'
import ReactiveProvide from 'vue-reactive-provide'
import BlockComponent from '@/components/BlockComponentProd.vue'
import BlockPlaceholder from '@/components/BlockPlaceholderProd.vue'
import { toStyle } from '@/css'

Vue.use(ReactiveProvide)

Vue.component('bj-block-component', BlockComponent)
Vue.component('bj-block-placeholder', BlockPlaceholder)

export default {
  reactiveProvide: {
    name: 'blockJS',
    include: [
      'mode',
      'isEditing',
      'data',
      'toStyle',
    ],
  },
  props: {
    blocks: Array,
    data: Object,
  },
  methods: {
    toStyle(styleData) {
      return toStyle(styleData)
    },
  },
}
</script>

<style lang="scss">

</style>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";
</style>
