import Vue from 'vue'

const blocks = []
const blockMap = {}

export function registerBlock(id, options) {
  blocks.push({
    id,
    options,
  })
  blockMap[id] = options
  Vue.component(id, options.component)
  Vue.component(`${id}-inspector`, options.inspector)
}

export function getToolbarItems() {
  return blocks.map(item => ({
    id: item.id,
    ...item.options.toolbar,
  }))
}

export function getDefaults(id) {
  console.log(blockMap)
  return blockMap[id].defaults
}
