<template>
  <div class="bj-block-placeholder" :class="{ 'odd': index % 2 == 1 }">
    empty
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-block-placeholder {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  &.odd {
    background-color: $white-ter;
  }
}
</style>
