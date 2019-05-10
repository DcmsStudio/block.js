<template>
  <b-dropdown class="bj-block-dropdown" aria-role="list">
    <slot slot="trigger" />
    <b-dropdown-item class="bj-block-dropdown-item" aria-role="listitem" :custom="true">
      <BlockTypeList @clickItem="$emit('select', $event)"/>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import BlockTypeList from '@/components/BlockTypeList.vue'

export default {
  components: {
    BlockTypeList,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-block-dropdown {
  .dropdown-content {
    background-color: $white-ter;
  }

  .bj-block-dropdown-item {
    color: $text;
    &:hover {
      color: $text;
      background-color: $white-ter;
    }
  }
}
</style>
