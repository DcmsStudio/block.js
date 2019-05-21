<template>
  <div v-show="visible" class="bj-block-editing-tools" :style="style">
    <div class="bj-block-label">
      <b-icon :icon="icon" />
    </div>
    <div class="bj-block-label" @click="$emit('moveUp')">
      <b-icon icon="arrow-alt-up" size="is-small" />
    </div>
    <div class="bj-block-label" @click="$emit('moveDown')">
      <b-icon icon="arrow-alt-down" size="is-small" />
    </div>
    <div class="bj-block-label danger" @click="$emit('delete')">
      <b-icon icon="trash-alt" size="is-small" />
    </div>
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'

export default {
  props: {
    selection: Object,
  },
  data() {
    return {
      visible: false,
      style: {},
    }
  },
  computed: {
    icon() {
      if (!this.selection) {
        return null
      }
      return pluginApi.getPluginById(this.selection.id).icon
    },
  },
  watch: {
    selection() {
      this.updateTools()
    },
  },
  mounted() {
    window.addEventListener('resize', () => this.updateTools())
    this.updateTools()
  },
  methods: {
    updateTools() {
      this.visible = false
      if (!this.selection) {
        return
      }
      this.$nextTick(() => {
        this.visible = true
        const selectedEl = document.querySelector('.bj-block-component.selected')
        const toolsParentEl = this.$el.parentNode
        if (!selectedEl || !toolsParentEl) {
          return
        }
        const toolsParentRect = toolsParentEl.getBoundingClientRect()
        const selectedRect = selectedEl.getBoundingClientRect()
        this.style.top = `${selectedRect.top - toolsParentRect.top}px`
        this.style.left = `${selectedRect.left - toolsParentRect.left}px`
      })
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-block-editing-tools {
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0px;
  transform: translate(0, -100%);
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;

  > * {
    margin-right: 3px;
  }

  .bj-block-label {
    display: block;
    padding: 3px 5px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: $warning;
  }
}
</style>
