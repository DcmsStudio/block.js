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
      bindable: true,
    },
    ratio: {
      type: 'select',
      default: 'is-3by1',
      props: {
        options: [{
          id: 'is-3by1',
          label: '3:1',
        }, {
          id: 'is-1by1',
          label: '1:1',
        }, {
          id: 'is-5by4',
          label: '5:4',
        }],
      },
    },
  },
  styleList: [
  ],
}
