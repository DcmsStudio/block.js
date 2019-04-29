<template>
  <div class="block-js bj-root">
    <div class="bj-block-list">
      <component v-for="(block) in blocks"
        :is="block.id"
        :class="{ 'selected': isSelected(block) }"
        :key="block.id"
        :data="block"
        @click.native="onClick($event, block)" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    selection: Object,
    blocks: Array,
  },
  methods: {
    isSelected(block) {
      return this.selection === block
    },
    onClick(e, block) {
      this.$emit('blockSelect', block)
    },
  },
}
</script>
