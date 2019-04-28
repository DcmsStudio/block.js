import * as blockjsEditing from '@/block-editing'
import layout from '@/plugins/layout'


function use(plugin) {
  plugin(blockjsEditing)
}

use(layout)
