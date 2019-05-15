import Vue from 'vue'

import layoutPlugin from './layout'
import columnsPlugin from './columns'
import emptyPlugin from './empty'
import imagePlugin from './image'

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

export function getPluginById(id) {
  return pluginMap[id]
}

registerPlugin(layoutPlugin)
registerPlugin(columnsPlugin)
registerPlugin(emptyPlugin)
registerPlugin(imagePlugin)
