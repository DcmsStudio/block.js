<template>
  <div v-if="visible" v-click-outside="onClickOutSide" class="bj-block-dropdown" :style="style">
    <BlockTypeList @clickItem="$emit('select', $event)"/>
  </div>
</template>

<script>
import BlockTypeList from '@/components/BlockTypeList.vue'

export default {
  components: {
    BlockTypeList,
  },
  props: {
    visible: Boolean,
    top: Number,
    left: Number,
  },
  computed: {
    style() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
      }
    },
  },
  methods: {
    onClickOutSide() {
      this.$emit('hide')
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-block-dropdown {
  background-color: $white-ter;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  border: 1px solid $grey-lighter;
  box-shadow: 0 0 10px $grey-light;
}
</style>
