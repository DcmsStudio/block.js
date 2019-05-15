<template>
  <b-field class="bj-inspector-link-field horizontal"
    :label="label"
    custom-class="is-small">
    <b-input
        size="is-small"
        type="text"
        icon="link"
        v-model="src">
    </b-input>
  </b-field>
</template>

<script>
export default {
  props: {
    src: String,
    label: String,
  },
}
</script>

<style lang="scss">
.bj-inspector-link-field {

}
</style>
