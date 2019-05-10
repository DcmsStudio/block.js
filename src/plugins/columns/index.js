import uuid from 'uuid'
import Columns from './Columns.vue'
import Inspector from './Inspector.vue'

function createDefaults() {
  return {
    id: Columns.name,
    uuid: uuid.v4(),
    attrs: {
      columns: 3,
    },
    style: {},
    items: [],
  }
}

export default {
  id: Columns.name,
  block: Columns,
  icon: 'columns',
  displayName: 'Columns',
  inspector: Inspector,
  createDefaults,
}
