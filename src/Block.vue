<template>
  <div class="block-js bj-root">
    <Draggable v-if="blockJS.isEditing"
      class="block-js-draggable"
      :list="blocks"
      :sortable="true"
      tag="div"
      group="block"
      ghost-class="block-js-ghost"
      handle=".draggable-handle"
      @change="onChange">
      <component v-for="(block) in blocks"
        :is="block.id"
        :key="block.uuid"
        :data="block"
        @click.native="onClickBlock(block)"/>
    </Draggable>
    <template v-else>
      <component v-for="(block) in blocks"
        :is="block.id"
        :key="block.uuid"
        :data="block" />
    </template>
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
    onClickBlock: Function,
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
