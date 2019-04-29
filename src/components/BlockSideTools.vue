<template>
  <div class="bj-block-side-tools">
    <div class="bj-block-label">Layout</div>
    <div class="bj-block-label bj-block-close">
      <b-icon
          pack="fas"
          icon="trash-alt"
          size="is-small">
      </b-icon>
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

.bj-block-side-tools {
  display: none;
  position: absolute;
  top: 0;
  left: 0px;
  transform: translate(-100%, 0);
  font-size: 12px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  > * {
    margin-bottom: 3px;
  }

  .bj-block-label {
    display: block;
    padding: 3px 5px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: $warning;
  }
}
</style>
