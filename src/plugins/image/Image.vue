<template>
<bj-block-component class="bj-image" :data="data" :customStyleTarget="true">
  <figure class="image" :class="data.attrs.ratio" :style="blockJS.toStyle(data.style)">
    <img v-if="data.attrs.src" :src="getAttrValue('attr')">
    <b-icon v-else class="placeholder" icon="image" />
  </figure>
</bj-block-component>
</template>

<script>
import attrMixin from '@/plugins/attrMixin'

export default {
  name: 'bj-image',
  mixins: [attrMixin],
  inject: ['blockJS'],
  props: {
    data: Object,
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-image {
  .image {
    position: relative;
    background-color: $grey-lighter;
    width: 100%;

    > img {
      object-fit: cover;
    }

    .placeholder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $grey-light;
    }
  }
}
</style>
