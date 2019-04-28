<template>
  <div class="app">
    <div v-if="isEditing" class="bj-toolbar level">
      <div class="level-left">
        <ToolbarItem v-for="item in toolbarItems"
          :key="item.id"
          :tooltip="item.tooltip"
          :icon="item.icon"
          @click.native="onClickToolbarItem(item)"/>
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
import uuid from 'uuid'
import cloneDeep from 'clone-deep'
import '@/plugins'
import { Block } from './block'
import ToolbarItem from '@/components/ToolbarItem.vue'
import BlockInspector from '@/BlockInspector.vue'
import * as blockEditing from '@/block-editing'

export default {
  name: 'app',
  components: {
    ToolbarItem,
    Block,
    BlockInspector,
  },
  reactiveProvide: {
    name: 'blockJSConfig',
    include: ['mode', 'isEditing'],
  },
  data() {
    return {
      mode: 'editing',
      blocks: [],
      selection: null,
      toolbarItems: blockEditing.getToolbarItems(),
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
    onClickToolbarItem(item) {
      console.log(item)
      this.blocks.push({
        uuid: uuid.v4(),
        id: item.id,
        ...cloneDeep(blockEditing.getDefaults(item.id)),
      })
    },
  },
}
</script>

<style lang="scss">
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
</style>
