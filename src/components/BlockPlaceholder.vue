<template>
  <div class="bj-block-placeholder" :class="{ 'odd': isOdd }">
    <div class="btn-add-block" @click="blockJS.showBlockDropdown($event, parentData, index)">
      <b-icon icon="plus" size="is-small" />
    </div>
  </div>
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

  .btn-add-block {
    user-select: none;
    font-size: 10px;
    color: $grey-light;
    border: 2px dashed $grey-lighter;
    border-radius: 5px;

    &:hover {
      color: $info;
      border: 2px dashed $info;
    }
  }
}
</style>
