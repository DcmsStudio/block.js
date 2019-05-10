<template>
  <b-field :label="label" custom-class="is-small">
    <b-numberinput controls-position="compact"
      size="is-small"
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

</style>
