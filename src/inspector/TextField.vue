<template>
  <b-field class="bj-inspector-text-field horizontal"
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
.bj-inspector-textarea-field {

}
</style>
