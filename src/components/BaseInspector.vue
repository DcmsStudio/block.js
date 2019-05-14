<template>
  <div class="bj-base-inspector">
    <div class="panel">
      <p class="panel-heading">
        <b-icon icon="list" size="small" /> Attributes
      </p>
      <div class="panel-block">
        <slot />
      </div>
    </div>
    <div class="panel">
      <p class="panel-heading">
        <b-icon icon="file-code" size="small" /> Style
      </p>
      <div class="panel-block panel-block-style">
        <css-editor :styleList="styleList" :styleData="data.style" />
      </div>
    </div>
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    styleList() {
      return pluginApi.getPluginById(this.data.id).styleList
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-base-inspector {
  .panel {
    margin-bottom: 0;
  }

  .panel-heading {
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 14px;
    padding: 0.2em 0.5em;
  }

  .panel-block {
    border-left: none;
    border-right: none;
  }

  .panel-block-style {
    padding: 0;
  }
}
</style>
