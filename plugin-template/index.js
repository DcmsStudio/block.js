import uuid from 'uuid'
import Component from './Component.vue'
import Inspector from './Inspector.vue'

function createDefaults() {
  return {
    id: Component.name,
    uuid: uuid.v4(),
    attrs: {},
    style: {},
    items: [],
  }
}

export default {
  id: Component.name,
  block: Component,
  icon: '',
  displayName: 'Component',
  styleList: [
  ],
  inspector: Inspector,
  createDefaults,
}
