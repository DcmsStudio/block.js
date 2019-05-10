<template>
  <BaseInspector :data="data">
    <NumberField label="Columns"
      :min="1"
      :max="12"
      v-model="data.attrs.columns" />
  </BaseInspector>
</template>

<script>
import BaseInspector from '@/components/BaseInspector.vue'
import NumberField from '@/inspector/NumberField.vue'

export default {
  components: {
    BaseInspector,
    NumberField,
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
