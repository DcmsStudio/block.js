<template>
  <SelectField
    :label="label"
    :options="options"
    :value="value"
    @input="$emit('input', $event)"/>
</template>

<script>
import SelectField from '@/inspector/SelectField.vue'

export default {
  components: {
    SelectField,
  },
  props: {
    label: String,
    value: String,
  },
}
</script>

<style>

</style>
