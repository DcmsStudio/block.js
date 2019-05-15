<template>
  <div v-show="visible" class="bj-block-editing-tools" :style="style">
    <div class="bj-block-label draggable-handle">
      <b-icon icon="arrows" size="is-small"></b-icon>
    </div>
    <div class="bj-block-label bj-block-close">
      <b-icon icon="trash-alt" size="is-small"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selection: Object,
  },
  watch: {
    selection() {
      this.updateTools()
    },
  },
  data() {
    return {
      visible: false,
      style: {},
    }
  },
  mounted() {
    window.addEventListener('resize', () => this.updateTools())
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

    &.draggable-handle {
      cursor: move;
    }
  }
}
</style>
