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
      <div class="level-center">

      </div>
      <div class="level-right"></div>
    </div>
    <div class="container">
      <Block :mode="mode"
        :class="{ editing: isEditing }"
        :blocks="blocks"
        :selection="selection"
        @blockSelect="onBlockSelect" />
    </div>
    <div class="bj-toolbar-side">
      <ToolbarItem v-for="(item, idx) in sideItems"
          :key="idx"
          :tooltip="item.displayName"
          tooltipPosition="is-right"
          :icon="item.icon"
          @click.native="onClickToolbarItem(item.id)" />
    </div>
    <BlockInspector :data="selection" />
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'
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
    include: ['mode', 'isEditing', 'selection'],
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
      sideItems: pluginApi.getPlugins().map(item => ({
        id: item.id,
        displayName: item.displayName,
        icon: item.icon,
      })),
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
      const plugin = pluginApi.getPluginById(id)
      const block = plugin.createDefaults()
      this.blocks.push(block)
      this.selection = block
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
  padding-top: 60px;
  padding-left: 60px;
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
  padding: 0em 3em;
  height: 40px;
  margin-bottom: 0 !important;
}

.bj-toolbar-side {
  z-index: 100;
  margin: 0;
  position: fixed;
  top: 100px;
  left: 0;
  height: 500px;
  width: 40px;
  box-shadow: 0 0 4px $grey-lighter;
  background-color: $white;
  padding: 0.4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
