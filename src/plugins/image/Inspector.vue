<template>
  <BaseInspector :data="data">
    <SrcField label="src" v-model="data.attrs.src" />
  </BaseInspector>
</template>

<script>
import BaseInspector from '@/components/BaseInspector.vue'
import SrcField from '@/inspector/SrcField.vue'

export default {
  components: {
    BaseInspector,
    SrcField,
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
