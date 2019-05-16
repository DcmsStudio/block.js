<template>
  <div class="bj-base-inspector">
    <div class="bj-title"><b-icon :icon="icon" />&nbsp;{{ name }}</div>
    <div v-if="isShowAttrs" class="panel attrs">
      <p class="panel-heading">
        <b-icon icon="list" size="small" /> Attributes
      </p>
      <div class="panel-block">
        <slot v-if="hasInspector" />
        <template v-else>
          <component v-for="attr in attrList"
            :is="'inspector-' + attr.type + '-field'"
            :key="attr.name"
            :label="attr.name"
            v-bind="attr.props"
            v-model="data.attrs[attr.name]" />
        </template>
      </div>
    </div>
    <div v-if="styleList && styleList.length > 0" class="panel styles">
      <p class="panel-heading">
        <b-icon icon="file-code" size="small" /> Style
      </p>
      <div class="panel-block">
        <css-editor :styleList="styleList" :styleData="data.style"
          @change="blockJS.onStyleChange($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import * as pluginApi from '@/plugins'

export default {
  inject: ['blockJS'],
  props: {
    data: Object,
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
    hasInspector() {
      return this.data && pluginApi.getPluginById(this.data.id).inspector
    },
    isShowAttrs() {
      return !!pluginApi.getPluginById(this.data.id).attrs
    },
    attrList() {
      const { attrs } = pluginApi.getPluginById(this.data.id)
      return Object.keys(attrs).map(key => ({
        name: key,
        ...attrs[key],
      }))
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


  .field.horizontal {
    display: flex;
    align-items: center;

    .field-label, .label {
      margin-right: 0;
      min-width: 80px;
      text-align: left;
      display: flex;
      align-items: center;
      margin-bottom: 0;
    }
  }

  .styles > .panel-block {
    padding: 0;
    flex-direction: column;
    align-items: stretch;
  }

  .attrs > .panel-block {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
