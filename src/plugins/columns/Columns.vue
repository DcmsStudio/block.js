<template>
  <bj-block-component class="bj-columns" :data="data">
    <div class="columns">
      <div v-for="(_, index) in data.attrs.columns"  :key="index" class="column">
        <component v-if="data.items[index]"
          :is="data.items[index].id" :data="data.items[index]" :level="level+1"/>
        <bj-block-placeholder v-else :index="index" :level="level" :parentData="data"/>
      </div>
    </div>
  </bj-block-component>
</template>

<script>

export default {
  name: 'bj-columns',
  inject: ['blockJS'],
  props: {
    data: Object,
    level: Number,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.columns {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
