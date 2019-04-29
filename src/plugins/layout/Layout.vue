<template>
  <div class="bj-layout bj-inspectable" :data-uuid="data.uuid">
    <template v-if="isShowDefaults">
      <div v-for="n in data.attrs.itemCount" :key="n" class="bj-layout-item-default"></div>
    </template>
    <template v-else>
      <component v-if="items[n]" :is="items[n].id" :data="items[n]" />
    </template>
    <BlockSideTools v-if="blockJS.isEditing" :block="data" />
  </div>
</template>

<script>
import BlockSideTools from '@/components/BlockSideTools.vue'

export default {
  name: 'bj-layout',
  components: {
    BlockSideTools,
  },
  inject: ['blockJS'],
  props: {
    data: Object,
  },
  computed: {
    isShowDefaults() {
      return !this.items || !Array.isArray(this.items) || this.items.length === 0
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-layout {
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 0;
  cursor: pointer;

  .bj-layout-item-default {
    flex: 1;
    height: 5em;
    border: 2px dashed $grey-lighter;
    background-color: change-color($grey-lighter, $alpha: 0.5);
  }
}
</style>
