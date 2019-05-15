<template>
  <b-field class="bj-inspector-select-field horizontal"
    :label="label"
    custom-class="is-small">
    <b-select :value="value" size="is-small" @input="$emit('input', $event)">
      <option
          v-for="option in options"
          :value="isStringOptions ? option : option.id"
          :key="isStringOptions ? option : option.id">
          {{ isStringOptions ? option : (option.label || options.id) }}
      </option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    options: Array,
  },
  computed: {
    isStringOptions() {
      return typeof this.options[0] === 'string'
    },
  },
}
</script>

<style lang="scss">
.bj-inspector-select-field {

}
</style>
