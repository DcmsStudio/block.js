<template>
  <b-tooltip :label="tooltip" :position="tooltipPosition" type="is-info">
    <b-button type="is-white">
      <b-icon pack="fas" :icon="icon" size="is-small"></b-icon>
    </b-button>
  </b-tooltip>
</template>

<script>
export default {
  props: {
    tooltip: String,
    icon: String,
    tooltipPosition: {
      type: String,
      default: 'is-bottom',
    },
  },
}
</script>
