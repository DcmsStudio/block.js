<template>
  <div class="blockjs-inspector">
    <div v-if="!data" class="empty-tips">No selection.</div>
    <component v-else-if="hasInspector" :is="data.id + '-inspector'" :data="data" />
    <BaseInspector v-else :data="data"></BaseInspector>
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'
import BaseInspector from '@/components/BaseInspector.vue'

export default {
  components: {
    BaseInspector,
  },
  props: {
    data: Object,
  },
  computed: {
    hasInspector() {
      return this.data && pluginApi.getPluginById(this.data.id).inspector
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.blockjs-inspector {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  box-shadow: 0 0 5px $grey-lighter;

  .empty-tips {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
