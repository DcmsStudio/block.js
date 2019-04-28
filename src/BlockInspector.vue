<template>
  <div class="blockjs-inspector">
    <div v-if="!type" class="empty-tips">No selection.</div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    data: Object,
  },
}
</script>
