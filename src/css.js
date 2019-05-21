import cloneDeep from 'clone-deep'

export const unitDefaults = { value: 0, unit: 'em' }

const withUnits = (array) => {
  const value = {
    multiple: true,
  }
  array.forEach((key) => {
    value[key] = cloneDeep(unitDefaults)
  })
  return value
}

export const boxDefaults = withUnits(['top', 'right', 'bottom', 'left'])

export const styleDefaults = {
  margin: cloneDeep(boxDefaults),
  padding: cloneDeep(boxDefaults),
  height: cloneDeep(unitDefaults),
  fontSize: Object.assign(cloneDeep(unitDefaults), { value: 1 }),
  alignItems: 'flex-start',
}

export const styleOptions = {
  alignItems: [
    'flex-start',
    'center',
    'flex-end',
  ],
}

export const createUnit = (value = 0, unit = 'em') => ({ value, unit })

export const toStyle = (styleData) => {
  const style = {}
  Object.keys(styleData).forEach((key) => {
    const propData = styleData[key]
    if (propData.multiple) {
      Object.keys(propData).forEach((subKey) => {
        if (subKey === 'multiple') return
        const subPropData = propData[subKey]
        const styleKey = `${key}-${subKey}`
        if (subPropData.unit) {
          style[styleKey] = subPropData.value + subPropData.unit
        } else {
          style[styleKey] = subPropData
        }
      })
    } else if (propData.unit) {
      style[key] = propData.value + propData.unit
    } else {
      style[key] = propData
    }
  })
  return style
}
