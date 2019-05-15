import uuid from 'uuid'
import Layout from './Layout.vue'
import Inspector from './Inspector.vue'

function createDefaults() {
  return {
    id: Layout.name,
    uuid: uuid.v4(),
    attrs: {
      itemCount: 3,
      direction: 'row',
    },
    style: {},
    items: [],
  }
}

export default {
  id: Layout.name,
  block: Layout,
  icon: 'th-large',
  displayName: 'Layout',
  inspector: Inspector,
  styleList: [
    'margin',
    'padding',
    // 'border',
    'alignItems',
  ],
  createDefaults,
}
