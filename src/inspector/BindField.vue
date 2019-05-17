<template>
  <b-field class="bj-inspector-bind-field horizontal"
    :label="label"
    custom-class="is-small">
    <b-input
        size="is-small"
        type="text"
        :value="value"
        @input="$emit('input', $event)">
    </b-input>
  </b-field>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-inspector-bind-field {
  .label {
    color: $info;
    font-weight: bold;
  }
}
</style>
