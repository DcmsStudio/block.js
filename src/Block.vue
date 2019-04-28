<template>
  <div class="block-js bj-root" :class="classes">
    <div class="bj-toolbar level">
      <div class="level-left">
        <ToolbarItem tooltip="Append layout" icon="th-large" @click.native="onClickAppendLayout"/>
      </div>
    </div>
    <div class="bj-layout-list">
      <Layout v-for="(layout, idx) in layouts"
        :class="{ 'selected': isSelectedLayout(layout) }"
        :key="idx"
        :attrs="layout.attrs"
        :items="layout.items"
        @click.native="onClickLayout($event, layout)" />
    </div>
  </div>
</template>

<script>
import uuid from 'uuid'
import cloneDeep from 'clone-deep'
import ToolbarItem from '@/components/ToolbarItem.vue'
import Layout, { layoutAttrDefaults } from '@/components/Layout.vue'

export default {
  components: {
    ToolbarItem,
    Layout,
  },
  reactiveProvide: {
    name: 'blockJSConfig',
    include: ['mode', 'isEditing'],
  },
  props: {
    selection: Object,
  },
  data() {
    return {
      mode: 'editing',
      layouts: [],
    }
  },
  computed: {
    classes() {
      return this.isEditing ? ['editing'] : null
    },
    isEditing() {
      return this.mode === 'editing'
    },
  },
  methods: {
    isSelectedLayout(layout) {
      return this.selection === layout
    },
    onClickAppendLayout() {
      this.layouts.push({
        uuid: uuid.v4(),
        attrs: cloneDeep(layoutAttrDefaults),
        items: [],
      })
    },
    onClickLayout(e, layout) {
      this.$emit('layoutSelect', layout)
    },
  },
}
</script>
