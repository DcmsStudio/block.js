import Vue from 'vue'
import CssEditor from './CssEditor.vue'
import LayoutEditor from './LayoutEditor.vue'
import UnitField from './UnitField.vue'

Vue.component('css-editor', CssEditor)
Vue.component('css-unit-field', UnitField)
Vue.component('css-margin', LayoutEditor)
Vue.component('css-padding', LayoutEditor)
Vue.component('css-height', UnitField)
