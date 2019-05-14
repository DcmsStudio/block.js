import Vue from 'vue'
import cloneDeep from 'clone-deep'
import CssEditor from './CssEditor.vue'
import LayoutEditor from './LayoutEditor.vue'

Vue.component('css-editor', CssEditor)
Vue.component('css-margin', LayoutEditor)
Vue.component('css-padding', LayoutEditor)

export const unitDefaults = { value: 0, unit: 'em' }

const withUnits = (array) => {
  const value = {}
  array.forEach((key) => {
    value[key] = cloneDeep(unitDefaults)
  })
  return value
}

export const boxDefaults = withUnits(['top', 'right', 'bottom', 'left'])

export const styleDefaults = {
  margin: cloneDeep(boxDefaults),
  padding: cloneDeep(boxDefaults),
}
