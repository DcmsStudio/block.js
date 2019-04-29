import Vue from 'vue'

import layoutPlugin from './layout'

const plugins = []
const pluginMap = {}

export function registerPlugin(plugin) {
  const pluginId = plugin.id
  plugins.push(plugin)
  pluginMap[pluginId] = plugin
  Vue.component(pluginId, plugin.block)
  Vue.component(`${pluginId}-inspector`, plugin.inspector)
}

export function getPlugins() {
  return plugins
}

registerPlugin(layoutPlugin)
