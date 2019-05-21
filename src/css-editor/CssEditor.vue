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
    background-color: $white-ter;
  }

  > * {
    margin: 5px 0;
  }

  > .field {
    padding: 0.25em 1em;
    align-items: center;
  }
}
</style>
