<template>
  <div class="app">
    <div class="container">
      <Block v-if="blocks && blocks.length > 0" :mode="mode"
        :class="{ editing: isEditing }"
        :blocks="blocks"
        :selection="selection"
        :onChange="onBlocksChange"/>
      <div v-else class="no-blocks-tip">Empty, try add block with blow tools.</div>
      <BlockEditingTools
        ref="tools"
        v-show="selection"
        :selection="selection"
        @moveUp="onClickMoveUp"
        @moveDown="onClickMoveDown"
        @delete="onClickDelete" />
      <div class="bj-buttons">
        <BlockTypeList @clickItem="onNewBlock" />
      </div>
    </div>
    <BlockInspector :data="selection" @styleChange="onStyleChange"/>
    <BlockDropdown
      :visible="blockDropdown.visible"
      :top="blockDropdown.top"
      :left="blockDropdown.left"
      @hide="blockDropdown.visible = false"
      @select="onBlockDropdownSelect" />
  </div>
</template>

<script>
import cloneDeep from 'clone-deep'
import * as pluginApi from '@/plugins'
import { toStyle } from '@/css'
import Block from './Block.vue'
import BlockTypeList from '@/components/BlockTypeList.vue'
import BlockEditingTools from '@/components/BlockEditingTools.vue'
import BlockInspector from '@/BlockInspector.vue'
import BlockDropdown from '@/components/BlockDropdown.vue'

export default {
  name: 'app',
  components: {
    Block,
    BlockInspector,
    BlockTypeList,
    BlockEditingTools,
    BlockDropdown,
  },
  reactiveProvide: {
    name: 'blockJS',
    include: [
      'mode',
      'isEditing',
      'data',
      'hoverUuid',
      'setHoverUuid',
      'selection',
      'createBlockDefaults',
      'onClickBlock',
      'toStyle',
      'onStyleChange',
      'onBindsChange',
      'showBlockDropdown',
    ],
  },
  data() {
    let blocks = localStorage.getItem('block.js-temp-blocks')
    if (blocks) {
      blocks = JSON.parse(blocks)
    } else {
      blocks = []
    }
    return {
      mode: 'editing',
      hoverUuid: '',
      blocks: blocks,
      selection: null,
      toolbarItems: [{
        id: 'save',
        icon: 'save',
        tooltip: 'Save',
      }],
      blockDropdown: {
        visible: false,
        top: 0,
        left: 0,
        block: null,
        index: 0,
      },
      data: {},
    }
  },
  computed: {
    isEditing() {
      return this.mode === 'editing'
    },
  },
  watch: {
    blocks(val) {
      localStorage.setItem('block.js-temp-blocks', JSON.stringify(val))
    }
  },
  methods: {
    toStyle(styleData) {
      return toStyle(styleData)
    },
    onBlocksChange(e) {
      if (e.added) {
        this.selection = e.added.element
      } else if (e.removed && e.removed.element === this.selection) {
        this.selection = null
      }
    },
    onClickBlock(block) {
      this.selection = block
    },
    onNewBlock({ id }) {
      const block = this.createBlockDefaults(id)
      this.blocks.push(block)
      this.selection = block
    },
    createBlockDefaults(id) {
      return pluginApi.createDefaults(id)
    },
    setHoverUuid(uuid) {
      this.hoverUuid = uuid
    },
    onStyleChange(event) {
      if (this.selection) {
        this.selection.style[event.key] = event.value
      }
    },
    onBindsChange(binds) {
      this.selection.binds = cloneDeep(binds)
    },
    showBlockDropdown(event, block, index) {
      const rect = event.currentTarget.getBoundingClientRect()
      const appRect = this.$el.getBoundingClientRect()
      this.blockDropdown.top = rect.top - appRect.top + event.offsetY + 5
      this.blockDropdown.left = rect.left - appRect.left + event.offsetX + 5
      this.blockDropdown.block = block
      this.blockDropdown.visible = true
      this.blockDropdown.index = index
    },
    onBlockDropdownSelect(item) {
      const block = this.createBlockDefaults(item.id)
      let { items } = this.blockDropdown.block
      items = items.slice(0)
      items[this.blockDropdown.index] = block
      this.blockDropdown.block.items = items
    },
    onClickMoveUp() {
      let idx = this.blocks.indexOf(this.selection)
      if (idx <= 0) {
        return
      }
      let blocks = this.blocks.slice()
      let temp = blocks[idx - 1]
      blocks[idx] = temp
      blocks[idx - 1] = this.selection
      this.blocks = blocks
      this.$refs.tools.updateTools()
    },
    onClickMoveDown() {
      let idx = this.blocks.indexOf(this.selection)
      if (idx >= this.blocks.length - 1) {
        return
      }
      let blocks = this.blocks.slice()
      let temp = blocks[idx + 1]
      blocks[idx] = temp
      blocks[idx + 1] = this.selection
      this.blocks = blocks
      this.$refs.tools.updateTools()
    },
    onClickDelete() {
      let idx = this.blocks.indexOf(this.selection)
      if (idx >= 0) {
        let blocks = this.blocks.slice()
        blocks.splice(idx,  1)
        this.blocks = blocks
        this.selection = null
      }
    }
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
  padding-right: 360px;
  padding-top: 40px;
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;

  .container {
    position: relative;
    max-width: 800px;
    min-height: 100%;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
  padding: 0em 3em;
  height: 40px;
  margin-bottom: 0 !important;
}

.no-blocks-tip {
  padding: 20px;
  text-align: center;
  color: $grey;
  margin-top: 30px;
}

.bj-buttons {
  width: 100%;
  margin-top: 30px;


  .bj-block-type-list {
    margin: 5px 0;
    padding: 0 5px;
  }
}
</style>
