<template>
  <div class="app">
    <!-- <div v-if="isEditing" class="bj-toolbar level">
      <div class="level-left">
        <ToolbarItem v-for="(item, idx) in toolbarItems"
          :key="idx"
          :tooltip="item.tooltip"
          :icon="item.icon"
          @click.native="onClickToolbarItem(item.id)"/>
      </div>
      <div class="level-center">

      </div>
      <div class="level-right"></div>
    </div> -->
    <div class="container">
      <Block v-if="blocks && blocks.length > 0" :mode="mode"
        :class="{ editing: isEditing }"
        :blocks="blocks"
        :selection="selection"
        :onChange="onBlocksChange"/>
      <div v-else class="no-blocks-tip">Empty, try add block with blow tools.</div>
      <BlockEditingTools v-show="selection" :selection="selection" />
      <div class="bj-buttons">
        <BlockTypeList @clickItem="onNewBlock" />
      </div>
    </div>
    <BlockInspector :data="selection" @styleChange="onStyleChange"/>
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'
import { styleDefaults, toStyle } from '@/css'
import Block from './Block.vue'
import BlockTypeList from '@/components/BlockTypeList.vue'
import BlockEditingTools from '@/components/BlockEditingTools.vue'
import BlockInspector from '@/BlockInspector.vue'

export default {
  name: 'app',
  components: {
    Block,
    BlockInspector,
    BlockTypeList,
    BlockEditingTools,
  },
  reactiveProvide: {
    name: 'blockJS',
    include: [
      'mode',
      'hoverUuid',
      'setHoverUuid',
      'isEditing',
      'selection',
      'createBlockDefaults',
      'onClickBlock',
      'toStyle',
      'onStyleChange',
    ],
  },
  data() {
    return {
      mode: 'editing',
      hoverUuid: '',
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
      const plugin = pluginApi.getPluginById(id)
      const block = plugin.createDefaults()
      block.style = block.style || {}
      plugin.styleList.forEach((key) => {
        block.style[key] = styleDefaults[key]
      })
      return block
    },
    setHoverUuid(uuid) {
      this.hoverUuid = uuid
    },
    onStyleChange(event) {
      console.log(event)
      if (this.selection) {
        this.selection.style[event.key] = event.value
      }
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
