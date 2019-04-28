import defaults from './defaults'
import Layout from './Layout.vue'
import Inspector from './Inspector.vue'

export default function (blockjs) {
  blockjs.registerBlock(Layout.name, {
    component: Layout,
    inspector: Inspector,
    defaults,
    toolbar: {
      icon: 'th-large',
      tooltip: 'Append a layout',
    },
  })
}
