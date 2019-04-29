<template>
  <div class="bj-layout">
    <template v-if="isShowDefaults">
      <div v-for="n in data.attrs.itemCount" :key="n" class="bj-layout-item-default"></div>
    </template>
    <template v-else>
      <div v-for="n in data.attrs.itemCount" :key="n" class="bj-layout-item">
        <component v-if="items[n]" :is="items[n].id" :data="items[n]" />
      </div>
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
.bj-layout {
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 0;
}
</style>
