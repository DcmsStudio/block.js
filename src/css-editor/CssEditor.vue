<template>
  <div class="bj-css-editor">
    <component v-for="(item, index) in styleList"
      :is="'css-' + item"
      :key="item"
      :class="{ odd: index % 2 === 1 }"
      :label="item"
      :index="index"
      :value="styleData[item]"
      @input="$emit('change', {
        key: item,
        value: $event,
      })"/>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    styleList: Array,
    styleData: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-css-editor {
  width: 100%;

  > .odd {
    background-color: #fbfbfb;
    border-top: 1px dashed #f1f1f1;
    border-bottom: 1px dashed #f1f1f1;
  }

  > * {
    padding: 0.625em 1em;
  }

  > .field {
    align-items: center;
  }
}
</style>
