<template>
<BlockComponent :data="data">
</BlockComponent>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'
import attrMixin from '@/plugins/attrMixin'

export default {
  name: 'bj-component',
  mixins: [attrMixin],
  components: {
    BlockComponent,
  },
  inject: ['blockJS'],
  props: {
    data: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
</style>
