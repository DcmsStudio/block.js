<template>
  <div class="bj-base-inspector">
    <div class="bj-title"><b-icon :icon="icon" />&nbsp;{{ name }}</div>
    <div v-if="attrs" class="panel attrs">
      <p class="panel-heading">
        <b-icon icon="list" size="small" /> Attributes
      </p>
      <div class="panel-block">
        <slot />
      </div>
    </div>
    <div v-if="styles" class="panel styles">
      <p class="panel-heading">
        <b-icon icon="file-code" size="small" /> Style
      </p>
      <div class="panel-block">
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
    attrs: {
      type: Boolean,
      default: true,
    },
    styles: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    name() {
      return pluginApi.getPluginById(this.data.id).displayName
    },
    icon() {
      return pluginApi.getPluginById(this.data.id).icon
    },
    styleList() {
      return pluginApi.getPluginById(this.data.id).styleList
    },
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-base-inspector {
  .bj-title {
    font-size: 14px;
    font-weight: bold;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.5em;
    border-bottom: 1px solid $grey-lighter;
  }

  .panel {
    margin-bottom: 0;
  }

  .panel-heading {
    border-radius: 0;
    border-top-width: 0;
    border-left: none;
    border-right: none;
    font-size: 14px;
    padding: 0.2em 0.5em;
  }

  .panel-block {
    border-left: none;
    border-right: none;
  }

  .styles > panel-block {
    padding: 0;
  }
}
</style>
