<template>
  <div class="app">
    <div v-if="isEditing" class="bj-toolbar level">
      <div class="level-left">
        <ToolbarItem v-for="(item, idx) in toolbarItems"
          :key="idx"
          :tooltip="item.tooltip"
          :icon="item.icon"
          @click.native="onClickToolbarItem(item.id)"/>
      </div>
    </div>
    <div class="container">
      <Block :mode="mode"
        :class="{ editing: isEditing }"
        :blocks="blocks"
        :selection="selection"
        @blockSelect="onBlockSelect" />
    </div>
    <BlockInspector :data="selection" />
  </div>
</template>

<script>
import { getPlugins } from '@/plugins'
import Block from './Block.vue'
import ToolbarItem from '@/components/ToolbarItem.vue'
import BlockInspector from '@/BlockInspector.vue'

export default {
  name: 'app',
  components: {
    ToolbarItem,
    Block,
    BlockInspector,
  },
  reactiveProvide: {
    name: 'blockJS',
    include: ['mode', 'isEditing'],
  },
  data() {
    return {
      mode: 'editing',
      blocks: [],
      selection: null,
      toolbarItems: [{
        id: 'save',
        icon: 'save',
        tooltip: 'Save',
      }],
    }
  },
  computed: {
    isEditing() {
      return this.mode === 'editing'
    },
  },
  methods: {
    onBlockSelect(block) {
      this.selection = block
    },
    onClickToolbarItem(id) {
      console.log(id)
      console.log(getPlugins())
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.app {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100%;
  padding-right: 300px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;

  .container {
    max-width: 800px;
    min-height: 100%;
    margin: 0 auto;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  }
}

.bj-toolbar {
  z-index: 100;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 4px $grey-lighter;
  background-color: $white;
  height: 50px;
  padding: 0.5em 3em;
}
</style>
