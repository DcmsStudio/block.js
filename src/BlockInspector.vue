<template>
  <div class="blockjs-inspector">
    <div v-if="!data" class="empty-tips">No selection.</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>
