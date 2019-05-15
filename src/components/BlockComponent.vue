<template>
  <div class="bj-block-component"
  :class="{ selected: isSelected, hover: isHoverSelf  }"
  :uuid="data.uuid"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseOut"
  @mouseover="onMouseOver"
  @click.stop="blockJS.onClickBlock(data)"
  :style="customStyleTarget ? null : blockJS.toStyle(data.style)">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'bj-block-component',
  components: {
  },
  inject: ['blockJS'],
  props: {
    data: Object,
    customStyleTarget: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSelected() {
      return this.blockJS.selection && this.blockJS.selection.uuid === this.data.uuid
    },
    isHoverSelf() {
      return this.blockJS.hoverUuid === this.data.uuid
    },
  },
  methods: {
    onMouseEnter() {
      this.blockJS.setHoverUuid(this.data.uuid)
    },
    onMouseOver(e) {
      e.stopPropagation()
      if (this.blockJS.hoverUuid !== this.data.uuid) {
        this.blockJS.setHoverUuid(this.data.uuid)
      }
    },
    onMouseOut() {
      if (this.blockJS.hoverUuid === this.data.uuid) {
        this.blockJS.setHoverUuid('')
      }
    },
  },
}
</script>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";

.bj-block-component {
  position: relative;

  & > * {
    z-index: 100;
  }

  &::before {
    display: block;
    content: ' ';
    position: absolute;
    border: 2px solid transparent;
  }

  &.hover {
    z-index: 300;

    &::before {
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: 4px solid lighten($orange, 30%);
    }
  }

  &.selected {
    z-index: 100;

    &::before {
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: 2px solid $warning;
      background-color: none;
    }
  }
}


</style>
