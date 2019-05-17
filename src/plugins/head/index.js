import Head from './Head.vue'

export default {
  id: Head.name,
  component: Head,
  icon: 'heading',
  displayName: 'Head',
  attrs: {
    text: {
      type: 'text',
      default: 'This is head.',
      bindable: true,
    },
    size: {
      type: 'select',
      default: 'h1',
      props: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
    },
  },
  styleList: [],
}
