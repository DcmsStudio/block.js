import Image from './Image.vue'

export default {
  id: Image.name,
  component: Image,
  icon: 'image',
  displayName: 'Image',
  attrs: {
    src: {
      type: 'src',
      default: '',
    },
    class: {
      type: 'select',
      default: 'is-3by1',
      props: {
        options: ['is-3by1'],
      },
    },
  },
  styleList: [
  ],
}
