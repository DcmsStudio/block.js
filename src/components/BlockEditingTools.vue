<template>
  <div class="bj-block-editing-tools">
    <div class="bj-block-label draggable-handle">
      <b-icon icon="arrows" size="is-small"></b-icon>
    </div>
    <div class="bj-block-label bj-block-close">
      <b-icon icon="trash-alt" size="is-small"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-block-editing-tools {
  display: none;
  position: absolute;
  top: 0;
  left: 0px;
  transform: translate(0, -100%);
  font-size: 12px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;

  > * {
    margin-right: 3px;
  }

  .bj-block-label {
    display: block;
    padding: 3px 5px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: $warning;

    &.draggable-handle {
      cursor: move;
    }
  }
}
</style>
