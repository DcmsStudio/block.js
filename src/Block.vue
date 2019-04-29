<template>
  <div class="block-js bj-root">
    <component v-for="(block) in blocks"
      :is="block.id"
      :key="block.uuid"
      :data="block" />
  </div>
</template>

<script>
export default {
  props: {
    selection: Object,
    blocks: Array,
  },
}
</script>

<style lang="scss">

</style>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";

.bj-inspectable:hover, .bj-inspectable.selected {
  z-index: 100;

  &::before {
    display: block;
    content: ' ';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid $warning;
  }

  .bj-block-side-tools {
    display: flex;
  }
}
</style>
