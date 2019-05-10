<template>
  <BlockComponent class="bj-columns" :data="data" :editingToolsStyle="editingToolsStyle">
    <div class="columns">
      <div v-for="n in data.attrs.columns"  :key="n" class="column">
        <component v-if="data.items[n]" :is="data.items[n].id" :data="data.items[n]" />
        <BlockPlaceholder v-else :index="n" />
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
