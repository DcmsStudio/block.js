<template>
  <div class="bj-css-layout">
    <div class="css-title">{{ label }}</div>
    <UnitField label="top" unit="em"  />
    <UnitField label="right" unit="em" />
    <UnitField label="bottom" unit="em" />
    <UnitField label="left" unit="em" />
  </div>
</template>

<script>
import UnitField from './UnitField.vue'

export default {
  components: {
    UnitField,
  },
  props: {
    label: String,
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
