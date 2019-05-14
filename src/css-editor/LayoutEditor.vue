<template>
  <div class="bj-css-layout">
    <div class="css-title">{{ label }}</div>
    <UnitField label="top" v-model="value.top"  />
    <UnitField label="right" v-model="value.right"/>
    <UnitField label="bottom" v-model="value.bottom"/>
    <UnitField label="left" v-model="value.left" />
  </div>
</template>

<script>
import UnitField from './UnitField.vue'

export default {
  name: 'css-layout',
  components: {
    UnitField,
  },
  props: {
    label: String,
    value: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-css-layout {
  padding: 0.25em 1em;
  width: 100%;

  .css-title {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0.325em;
  }

  .field {
    margin-bottom: 1px;

    .label {
      width: 60px;
      font-size: 12px;
      color: $grey-dark;
    }

    .unit-input {
      flex: 1;
    }
  }
}
</style>
