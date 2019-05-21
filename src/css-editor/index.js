import Vue from 'vue'
import { styleOptions } from '@/css'
import CssEditor from './CssEditor.vue'
import LayoutEditor from './LayoutEditor.vue'
import UnitField from './UnitField.vue'
import SelectEditor from './SelectEditor.vue'

Vue.component('css-editor', CssEditor)
Vue.component('css-unit-field', UnitField)
Vue.component('css-margin', LayoutEditor)
Vue.component('css-padding', LayoutEditor)
Vue.component('css-height', UnitField)
Vue.component('css-fontSize', UnitField)

const registerOptionsComponent = (name, parent) => {
  Vue.component(`css-${name}`, {
    extends: parent,
    data() {
      return {
        options: styleOptions[name],
      }
    },
  })
}

registerOptionsComponent('alignItems', SelectEditor)
