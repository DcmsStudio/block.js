import defaults from './defaults'
import Layout from './Layout.vue'

export default function (blockjs) {
  blockjs.registerBlock(Layout.name, {
    component: Layout,
    defaults,
    toolbar: {
      icon: 'th-large',
      tooltip: 'Append a layout',
    },
  })
}
