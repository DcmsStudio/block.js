<template>
  <b-field class="bj-unit-field" :label="label">
    <b-input class="unit-input"
      type="number"
      :value="value.value"
      :min="min"
      :max="max"
      size="is-small"
      @input="onValueChange($event, value.unit)"/>
    <b-select class="unit-select"
      size="is-small"
      :value="value.unit"
      @input="onValueChange(value.value, $event)">
        <option value="em">em</option>
        <option value="rem">rem</option>
        <option value="px">px</option>
        <option value="%">%</option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  props: {
    label: String,
    value: Object,
    min: [Number, String],
    max: [Number, String],
  },
  methods: {
    onValueChange(value, unit) {
      this.$emit('input', { value, unit })
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-unit-field {
  .label {
    width: 60px;
    font-size: 12px;
    margin-bottom: 0 !important;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
