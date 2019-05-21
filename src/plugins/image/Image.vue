<template>
<bj-block-component class="bj-image" :data="data">
  <figure class="image" :class="data.attrs.ratio">
    <img class="source" v-if="src" :src="src">
    <img class="placeholder" v-else src="http://via.placeholder.com/1200/FAFAFA/000000?text=[Image]">
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
  computed: {
    src() {
      return this.getAttrValue('src')
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-image {
  .image {
    position: relative;
    background-color: $grey-lighter;
    width: 100%;

    > .source {
      object-fit: cover;
      object-position: center;
    }

    > .placeholder {
      object-fit: cover;
      object-position: center;
      background-color: #fafafa;
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
