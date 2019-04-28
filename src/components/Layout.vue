<template>
  <div class="bj-layout">
    <template v-if="isShowDefaults">
      <div v-for="n in attrs.itemCount" :key="n" class="bj-layout-item-default"></div>
    </template>
    <div v-if="blockJSConfig.isEditing" class="bj-layout-label">Layout</div>
  </div>
</template>

<script>
export const layoutAttrDefaults = {
  itemCount: 3,
}

export default {
  inject: ['blockJSConfig'],
  props: {
    attrs: { type: Object, default: layoutAttrDefaults },
    items: Array,
  },
  computed: {
    isShowDefaults() {
      return !this.items || !Array.isArray(this.items) || this.items.length === 0
    },
  },
}
</script>

<style lang="scss">

</style>
