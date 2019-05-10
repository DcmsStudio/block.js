<template>
  <div class="bj-block-component"
  :class="{ selected: isSelected, 'any-selected': anySelected }"
  :data-uuid="data.uuid">
    <div class="bj-block-content">
      <slot />
    </div>
    <BlockEditingTools v-if="blockJS.isEditing" :block="data" :style="editingToolsStyle" />
  </div>
</template>

<script>
import BlockEditingTools from '@/components/BlockEditingTools.vue'

export default {
  name: 'bj-block-component',
  components: {
    BlockEditingTools,
  },
  inject: ['blockJS'],
  props: {
    data: Object,
    editingToolsStyle: Object,
  },
  computed: {
    isSelected() {
      return this.blockJS.selection && this.blockJS.selection.uuid === this.data.uuid
    },
    anySelected() {
      return !!this.blockJS.selection
    },
  },
}
</script>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";

.bj-block-component {
  position: relative;

  &::before {
    display: block;
    content: ' ';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid transparent;
  }

  &:hover {
    z-index: 100;

    &::before {
      border: 2px solid lighten($warning, 20%);
    }
  }

  &.any-selected {
    opacity: 0.3;
  }

  &.selected {
    opacity: 1;
    z-index: 100;

    &::before {
      border: 2px solid $warning;
    }

    .bj-block-editing-tools {
      display: flex;
    }
  }
}


</style>
