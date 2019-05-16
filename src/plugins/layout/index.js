import Layout from './Layout.vue'

export default {
  id: Layout.name,
  component: Layout,
  icon: 'th-large',
  displayName: 'Layout',
  attrs: {
    itemCount: {
      type: 'number',
      default: 3,
      props: {
        min: 1,
        max: 10,
      },
    },
  },
  styleList: [
    'margin',
    'padding',
    'alignItems',
  ],
}
