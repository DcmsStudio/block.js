<template>
  <BaseInspector :data="data">
    <section>
      <b-field label="Item Count" custom-class="is-small">
        <b-numberinput controls-position="compact"
          size="is-small"
          min="1"
          max="10"
          v-model="data.attrs.itemCount" />
      </b-field>
    </section>
  </BaseInspector>
</template>

<script>
import BaseInspector from '@/components/BaseInspector.vue'

export default {
  components: {
    BaseInspector
  },
  props: {
    data: Object,
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-layout-inspector {

}
</style>
