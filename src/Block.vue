<template>
  <div class="block-js bj-root">
    <component v-for="(block) in blocks"
      :is="block.id"
      :key="block.uuid"
      :data="block" />
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable,
  },
  inject: ['blockJS'],
  props: {
    selection: Object,
    blocks: Array,
    onChange: Function,
  },
}
</script>

<style lang="scss">

</style>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";

.block-js-ghost {
  opacity: 0.5;
}
</style>
