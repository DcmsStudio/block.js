<template>
  <BlockComponent :data="data" :customStyleTarget="true">
    <div class="bj-layout" :style="blockJS.toStyle(data.style)">
      <template v-for="(_, index) in data.attrs.itemCount">
        <component v-if="data.items[index]"
          class="bj-layout-item"
          :key="index" :is="data.items[index].id" :data="data.items[index]"
          :level="level+1" />
        <BlockPlaceholder v-else :key="index" :index="index" :level="level" :parentData="data" />
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
    level: Number,
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

  > .bj-layout-item {
    flex: 1;
  }
}
</style>
