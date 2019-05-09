<template>
  <div class="bj-block-type-list">
    <b-tooltip v-for="item in items"
      :key="item.id"
      :label="item.displayName"
      position="is-bottom"
      type="is-info">
      <b-icon class="icon" :icon="item.icon" size="is-small"
        @click.native="$emit('clickItem', item)"></b-icon>
    </b-tooltip>
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'

export default {
  components: {
  },
  computed: {
    items() {
      return pluginApi.getPlugins().map(item => ({
        id: item.id,
        displayName: item.displayName,
        icon: item.icon,
      }))
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-block-type-list {
  .icon {
    padding: 20px;
    cursor: pointer;

    &:hover {
      color: $info;
      background-color: $white;
    }
  }
}
</style>
