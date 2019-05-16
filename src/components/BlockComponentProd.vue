<template>
  <div class="bj-block-component"
  :uuid="data.uuid"
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
}
</script>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";

.bj-block-component {
  position: relative;
}
</style>
