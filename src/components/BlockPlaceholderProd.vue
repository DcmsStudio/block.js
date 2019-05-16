<template>
  <div class="bj-block-placeholder" :class="{ 'odd': isOdd }"></div>
</template>

<script>

export default {
  components: {
  },
  inject: ['blockJS'],
  props: {
    parentData: Object,
    level: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isOdd() {
      return this.index % 2 === 1
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
