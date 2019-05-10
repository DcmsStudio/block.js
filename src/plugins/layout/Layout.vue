<template>
  <BlockComponent :data="data">
    <div class="bj-layout">
      <template v-for="n in data.attrs.itemCount">
        <component v-if="data.items[n]" :key="n" :is="data.items[n].id" :data="data.items[n]" />
        <BlockPlaceholder v-else :key="n" :index="n" />
      </template>
    </div>
  </BlockComponent>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'
import BlockPlaceholder from '@/components/BlockPlaceholder.vue'

export default {
  name: 'bj-layout',
  components: {
    BlockComponent,
    BlockPlaceholder,
  },
  inject: ['blockJS'],
  props: {
    data: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-layout {
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 0;
}
</style>
