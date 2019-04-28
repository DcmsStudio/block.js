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
