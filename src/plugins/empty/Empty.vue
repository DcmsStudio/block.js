<template>
<BlockComponent class="bj-columns" :data="data" :customStyleTarget="true">
  <div class="bj-empty" :style="blockJS.toStyle(data.style)"></div>
</BlockComponent>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'

export default {
  name: 'bj-empty',
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

.bj-empty {
  min-height: 1rem;
}
</style>
