import uuid from 'uuid'
import Empty from './Empty.vue'
import Inspector from './Inspector.vue'

function createDefaults() {
  return {
    id: Empty.name,
    uuid: uuid.v4(),
    attrs: {
      columns: 3,
    },
    style: {},
    items: [],
  }
}

export default {
  id: Empty.name,
  block: Empty,
  icon: 'square-full',
  displayName: 'Empty',
  styleList: [
    'height',
  ],
  inspector: Inspector,
  createDefaults,
}
