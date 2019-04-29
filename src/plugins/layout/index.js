import uuid from 'uuid'
import Layout from './Layout.vue'
import Inspector from './Inspector.vue'

function createDefaults() {
  return {
    uuid: uuid.v4(),
    attrs: {
      itemCount: 3,
    },
  }
}

export default {
  id: Layout.name,
  block: Layout,
  icon: 'th-large',
  displayName: 'Layout',
  inspector: Inspector,
  createDefaults,
}
