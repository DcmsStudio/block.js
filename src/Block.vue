<template>
  <div class="block-js bj-root">
    <component v-for="(block) in blocks"
      :is="block.id"
      :key="block.uuid"
      :data="block" />
  </div>
</template>

<script>

export default {
  components: {
  },
  inject: ['blockJS'],
  props: {
    blocks: Array,
    data: Object,
  },
}
</script>

<style lang="scss">

</style>

<style lang="scss" mode="editing">
@import "~bulma/sass/utilities/_all";
</style>
