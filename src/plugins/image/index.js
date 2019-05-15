import uuid from 'uuid'
import Image from './Image.vue'
import Inspector from './Inspector.vue'

function createDefaults() {
  return {
    id: Image.name,
    uuid: uuid.v4(),
    attrs: {
      src: '',
      class: 'is-3by1',
    },
    style: {},
    items: [],
  }
}

export default {
  id: Image.name,
  block: Image,
  icon: 'image',
  displayName: 'Image',
  styleList: [
  ],
  inspector: Inspector,
  createDefaults,
}
