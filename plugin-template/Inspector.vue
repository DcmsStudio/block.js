<template>
  <BaseInspector :data="data" :attrs="false">
  </BaseInspector>
</template>

<script>
import BaseInspector from '@/components/BaseInspector.vue'

export default {
  components: {
    BaseInspector,
  },
  props: {
    data: Object,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
</style>
