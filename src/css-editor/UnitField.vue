<template>
  <b-field :label="label">
    <b-input class="unit-input" type="number" :value="value" :min="min" :max="max" size="is-small"/>
    <b-select class="unit-select" size="is-small" v-model="unit">
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
    value: Number,
    unit: String,
    min: [Number, String],
    max: [Number, String],
  },
}
</script>

<style lang="scss">

</style>
