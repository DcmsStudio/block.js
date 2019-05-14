<template>
  <b-field class="bj-inspector-number-field"
    :label="label"
    custom-class="is-small"
    horizontal>
    <b-numberinput controls-position="compact"
      size="is-small"
      type="is-light"
      :min="min"
      :max="max"
      :value="value"
      @input="$emit('input', $event)" />
  </b-field>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    min: [Number, String],
    max: [Number, String],
  },
}
</script>

<style lang="scss">
.bj-inspector-number-field {
  .field-label {
    margin-right: 0;
    min-width: 80px;
    text-align: left;
  }
}
</style>
