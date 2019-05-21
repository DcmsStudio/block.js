import Paragraph from './Paragraph.vue'

export default {
  id: Paragraph.name,
  component: Paragraph,
  icon: 'paragraph',
  displayName: 'Paragraph',
  attrs: {
    text: {
      type: 'textarea',
      default: 'This is paragraph.',
      bindable: true,
    },
  },
  styleList: [
    'margin',
    'padding',
    'fontSize',
  ],
}
