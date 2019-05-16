<template>
<bj-block-component :data="data" :customStyleTarget="true">
  <div v-if="blockJS.isEditing" class="bj-empty" :style="blockJS.toStyle(data.style)">
    Empty
  </div>
</bj-block-component>
</template>

<script>

export default {
  name: 'bj-empty',
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: $grey-lighter;
}
</style>
