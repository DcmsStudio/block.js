<template>
  <div class="blockjs-inspector">
    <div v-if="!data" class="empty-tips">No selection.</div>
    <component v-else :is="data.id + '-inspector'" :data="data" />
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.blockjs-inspector {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding-top: 40px;
  box-shadow: 0 0 5px $grey-lighter;

  .empty-tips {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
