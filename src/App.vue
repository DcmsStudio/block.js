<template>
  <div class="app">
    <div class="container">
      <Block :selection="selectionData" @layoutSelect="onLayoutSelect" />
    </div>
    <BlockInspector :type="selectionType" :data="selectionData" />
  </div>
</template>

<script>
import { Block } from './block'
import BlockInspector from './BlockInspector.vue'

export default {
  name: 'app',
  components: {
    Block,
    BlockInspector,
  },
  data() {
    return {
      selectionType: '',
      selectionData: null,
    }
  },
  methods: {
    onLayoutSelect(layout) {
      this.selectionType = 'layout'
      this.selectionData = layout
    },
  },
}
</script>

<style lang="scss">
.app {
  padding-right: 300px;
  .container {
    max-width: 800px;
    margin: 0 auto;
    min-height: 100%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  }
}
</style>
