<template>
  <b-tooltip :label="tooltip" position="is-bottom">
    <b-button type="is-light">
      <b-icon pack="fas" :icon="icon" size="is-small"></b-icon>
    </b-button>
  </b-tooltip>
</template>

<script>
export default {
  props: {
    tooltip: String,
    icon: String,
  },
}
</script>
