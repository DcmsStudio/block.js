<template>
  <div class="app">
    <div class="container">
      <Block />
    </div>
  </div>
</template>

<script>
import { Block } from './block'

export default {
  name: 'app',
  components: {
    Block,
  },
}
</script>

<style lang="scss">
.app {
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
