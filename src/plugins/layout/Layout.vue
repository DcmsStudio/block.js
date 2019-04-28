<template>
  <div class="bj-layout">
    <template v-if="isShowDefaults">
      <div v-for="n in data.attrs.itemCount" :key="n" class="bj-layout-item-default"></div>
    </template>
    <div v-if="blockJSConfig.isEditing" class="bj-layout-label">Layout</div>
  </div>
</template>

<script>
export default {
  name: 'bj-layout',
  inject: ['blockJSConfig'],
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

</style>
