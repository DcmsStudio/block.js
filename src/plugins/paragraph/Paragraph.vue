<template>
<BlockComponent class="bj-paragraph" :data="data" :customStyleTarget="true">
  <div class="content">
    <p :style="blockJS.toStyle(data.style)">{{getAttrValue('text') || '[No content]'}}</p>
  </div>
</BlockComponent>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'
import attrMixin from '@/plugins/attrMixin'

export default {
  name: 'bj-paragraph',
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

.bj-paragraph {
  p {
    min-height: 1rem;
  }
}
</style>
