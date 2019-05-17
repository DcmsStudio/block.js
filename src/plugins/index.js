import Vue from 'vue'
import uuid from 'uuid'

import { styleDefaults } from '@/css'

import layoutPlugin from './layout'
import columnsPlugin from './columns'
import emptyPlugin from './empty'
import imagePlugin from './image'
import headPlugin from './head'

const plugins = []
const pluginMap = {}

export function registerPlugin(plugin) {
  const pluginId = plugin.id
  plugins.push(plugin)
  pluginMap[pluginId] = plugin
  Vue.component(pluginId, plugin.component)
  if (plugin.inspector) {
    Vue.component(`${pluginId}-inspector`, plugin.inspector)
  }
}

export function getPlugins() {
  return plugins
}

export function getPluginById(id) {
  return pluginMap[id]
}

export function createDefaults(id) {
  const plugin = pluginMap[id]

  const attrs = {}
  if (typeof plugin.attrs === 'object') {
    Object.keys(plugin.attrs).forEach((key) => {
      attrs[key] = plugin.attrs[key].default
    })
  }

  const style = {}
  plugin.styleList.forEach((key) => {
    style[key] = styleDefaults[key]
  })

  return {
    id,
    uuid: uuid.v4(),
    attrs,
    style,
    items: [],
    binds: {},
  }
}

registerPlugin(layoutPlugin)
registerPlugin(columnsPlugin)
registerPlugin(emptyPlugin)
registerPlugin(imagePlugin)
registerPlugin(headPlugin)
