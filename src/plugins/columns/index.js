import Columns from './Columns.vue'

export default {
  id: Columns.name,
  block: Columns,
  icon: 'columns',
  displayName: 'Columns',
  attrs: {
    columns: {
      type: 'number',
      default: 3,
      props: {
        min: 1,
        max: 12,
      },
    },
  },
  styleList: [
    'padding',
  ],
}
