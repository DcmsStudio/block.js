<template>
  <div class="app">
    <div class="container">
      <Block :blocks="blocks" :data="data" />
    </div>
  </div>
</template>

<script>
import * as blockJS from './block'
import blockJSON from './blocks.json'

export default {
  components: {
    Block: blockJS.default.Block,
  },
  data() {
    return {
      blocks: blockJSON,
      data: {
        text: '123',
      },
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
</style>
