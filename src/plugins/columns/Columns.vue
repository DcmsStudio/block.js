<template>
  <BlockComponent class="bj-columns" :data="data" :editingToolsStyle="editingToolsStyle">
    <div class="columns">
      <div v-for="(_, index) in data.attrs.columns"  :key="index" class="column">
        <component v-if="data.items[index]"
          :is="data.items[index].id" :data="data.items[index]" :level="level+1"/>
        <BlockPlaceholder v-else :index="index" :level="level" :parentData="data"/>
      </div>
    </div>
  </BlockComponent>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'
import BlockPlaceholder from '@/components/BlockPlaceholder.vue'

export default {
  name: 'bj-columns',
  components: {
    BlockComponent,
    BlockPlaceholder,
  },
  inject: ['blockJS'],
  props: {
    data: Object,
    level: Number,
  },
  data() {
    return {
      editingToolsStyle: {

      },
    }
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

</style>
